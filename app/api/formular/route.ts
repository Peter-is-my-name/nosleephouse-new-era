import { NextRequest, NextResponse } from 'next/server'

/**
 * Lead notification endpoint for the /reklama funnel.
 *
 * Sends two emails via Resend's REST API (no SDK dependency):
 *   1. internal lead notification → CONTACT_TO (defaults to the Gmail inbox)
 *   2. a branded auto-reply → the lead (only on a fully completed submit)
 *
 * Degrades gracefully: if RESEND_API_KEY is not set (e.g. local dev, or before
 * the env var is added on Vercel) it logs the lead and returns ok, so the form
 * still succeeds and the browser Pixel + redirect keep working.
 */

interface FormPayload {
  email?: string
  name?: string
  phone?: string
  phonePrefix?: string
  websiteType?: string
  budget?: string
  source?: string
  partial?: boolean
  /** human service name, e.g. "AI kreativy" (absent = web /reklama) */
  service?: string
  /** qualification answers with their labels (newer forms send these) */
  answers?: { label?: string; value?: string }[]
  /** page language: cs | sk | en (selects the client auto-reply language) */
  locale?: string
}

/** Light HTML escaping for user-supplied values rendered into e-mails. */
function esc(v: string) {
  return v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const FROM_ADDRESS = 'nosleephouse <info@nosleephouse.cz>'
const LEAD_INBOX = process.env.CONTACT_TO || 'nosleephouse@gmail.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function safeReplyTo(email: string | undefined) {
  const trimmed = email?.trim()
  return trimmed && EMAIL_RE.test(trimmed) ? trimmed : undefined
}

function row(label: string, value: string | undefined) {
  if (!value) return ''
  return `<tr>
    <td style="color:#737373;padding:8px 0;width:160px;vertical-align:top;font-size:13px;">${label}</td>
    <td style="color:#fafafa;padding:8px 0;font-size:14px;">${value.replace(/\n/g, '<br>')}</td>
  </tr>`
}

function buildLeadEmail(body: FormPayload, isPartial: boolean) {
  const badgeLabel = isPartial ? 'Nedokončený formulář' : 'Nová poptávka'
  const heading = isPartial
    ? 'Návštěvník opustil formulář'
    : 'Nová poptávka z reklamního formuláře'
  const intro = isPartial
    ? 'Zanechal e-mail, ale formulář zatím nedokončil. Zvažte follow-up.'
    : 'Formulář byl kompletně vyplněn a odeslán.'

  // Labelled answers (new forms) or the legacy web-form fields (/reklama).
  const answers =
    body.answers && body.answers.length
      ? body.answers.filter((a) => a.label && a.value) as { label: string; value: string }[]
      : [
          { label: 'Typ webu', value: body.websiteType ?? '' },
          { label: 'Rozpočet', value: body.budget ?? '' },
        ].filter((a) => a.value)
  const answerRows = answers.map((a) => row(esc(a.label), esc(a.value))).join('')

  const html = `
  <div style="background:#0a0a0a;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid rgba(255,255,255,0.07);border-radius:16px;overflow:hidden;">
      <div style="background:#0a0a0a;padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.07);">
        <span style="color:#B2FB58;font-weight:800;font-size:15px;letter-spacing:-0.02em;">nosleephouse</span>
      </div>
      <div style="padding:32px;">
        <span style="display:inline-block;background:${isPartial ? 'rgba(255,255,255,0.08)' : '#B2FB58'};color:${isPartial ? '#e5e5e5' : '#0a0a0a'};font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:5px 12px;border-radius:6px;margin-bottom:18px;">
          ${badgeLabel}
        </span>
        <h1 style="color:#fafafa;font-size:20px;font-weight:700;margin:0 0 8px;">${heading}</h1>
        <p style="color:#a1a1a1;font-size:14px;line-height:1.6;margin:0 0 24px;">${intro}</p>
        <table style="width:100%;border-collapse:collapse;border-top:1px solid rgba(255,255,255,0.07);">
          ${row('Jméno', body.name)}
          ${row('E-mail', body.email)}
          ${row('Telefon', body.phone ? `${body.phonePrefix ?? '+420'} ${body.phone}` : undefined)}
          ${row('Služba', body.service ? esc(body.service) : undefined)}
          ${answerRows}
          ${row('Zdroj', body.source)}
        </table>
        <p style="color:#4a4a4a;font-size:12px;margin:24px 0 0;">${new Date().toLocaleString('cs-CZ')}</p>
      </div>
    </div>
  </div>`

  const text = [
    heading,
    '',
    `Jméno: ${body.name ?? '-'}`,
    `E-mail: ${body.email ?? '-'}`,
    `Telefon: ${body.phone ? `${body.phonePrefix ?? '+420'} ${body.phone}` : '-'}`,
    ...(body.service ? [`Služba: ${body.service}`] : []),
    ...answers.map((a) => `${a.label}: ${a.value}`),
    `Zdroj: ${body.source ?? '-'}`,
  ].join('\n')

  return { html, text }
}

type Lang = 'cs' | 'sk' | 'en'
type ServiceKey = 'default' | 'AI kreativy' | 'AI automatizace'

/** Client auto-reply copy per language (house rule: no em-dashes). */
const EMAIL: Record<
  Lang,
  {
    badge: string
    hi: (name: string) => string
    thanks: string
    received: (reply: string, topic: string) => string
    booked: (reply: string) => string
    nextTitle: string
    next: string
    regards: string
    team: string
    service: Record<ServiceKey, { reply: string; topic: string; subject: string }>
  }
> = {
  cs: {
    badge: 'Poptávka přijata',
    hi: () => 'Dobrý den,',
    thanks: 'děkujeme za váš čas.',
    received: (r, t) =>
      `Vaši poptávku jsme právě přijali a už se na ni díváme. Ozveme se vám do <strong style="color:#ffffff;">${r}</strong> s konkrétními návrhy na míru tomu, co jste nám ${t} prozradili.`,
    booked: (r) =>
      `Pokud jste si už vybrali termín v kalendáři, skvěle, uvidíme se na schůzce. Pokud ne, ozveme se vám do ${r} a termín domluvíme společně.`,
    nextTitle: 'Co bude dál?',
    next: 'Projdeme si vaše zadání, připravíme úvodní návrh řešení a probereme ho spolu na krátkém hovoru bez závazků.',
    regards: 'S pozdravem,',
    team: 'tým nosleephouse',
    service: {
      default: { reply: '24 hodin', topic: 'o svém webu', subject: 'Děkujeme za vaši důvěru. První krok k více zákazníkům je za vámi.' },
      'AI kreativy': { reply: 'pár hodin', topic: 'o svých reklamách', subject: 'Děkujeme za vaši důvěru. První krok k reklamám, které prodávají, je za vámi.' },
      'AI automatizace': { reply: 'pár hodin', topic: 'o své firmě a procesech', subject: 'Děkujeme za vaši důvěru. První krok k menší administrativě je za vámi.' },
    },
  },
  sk: {
    badge: 'Dopyt prijatý',
    hi: () => 'Dobrý deň,',
    thanks: 'ďakujeme za váš čas.',
    received: (r, t) =>
      `Váš dopyt sme práve prijali a už sa naň pozeráme. Ozveme sa vám do <strong style="color:#ffffff;">${r}</strong> s konkrétnymi návrhmi prispôsobenými tomu, čo ste nám ${t} prezradili.`,
    booked: (r) =>
      `Ak ste si už vybrali termín v kalendári, skvelé, uvidíme sa na stretnutí. Ak nie, ozveme sa vám do ${r} a termín dohodneme spoločne.`,
    nextTitle: 'Čo bude ďalej?',
    next: 'Prejdeme si vaše zadanie, pripravíme úvodný návrh riešenia a prediskutujeme ho spolu na krátkom nezáväznom hovore.',
    regards: 'S pozdravom,',
    team: 'tím nosleephouse',
    service: {
      default: { reply: '24 hodín', topic: 'o svojom webe', subject: 'Ďakujeme za vašu dôveru. Prvý krok k väčšiemu počtu zákazníkov je za vami.' },
      'AI kreativy': { reply: 'pár hodín', topic: 'o svojich reklamách', subject: 'Ďakujeme za vašu dôveru. Prvý krok k reklamám, ktoré predávajú, je za vami.' },
      'AI automatizace': { reply: 'pár hodín', topic: 'o svojej firme a procesoch', subject: 'Ďakujeme za vašu dôveru. Prvý krok k menšej administratíve je za vami.' },
    },
  },
  en: {
    badge: 'Enquiry received',
    hi: (n) => (n ? `Hello ${n},` : 'Hello,'),
    thanks: 'thank you for your time.',
    received: (r, t) =>
      `We have just received your enquiry and we are already looking at it. We will get back to you within <strong style="color:#ffffff;">${r}</strong> with concrete ideas tailored to what you told us ${t}.`,
    booked: (r) =>
      `If you have already picked a time in the calendar, great, we will see you at the meeting. If not, we will get in touch within ${r} to find a time together.`,
    nextTitle: 'What happens next?',
    next: 'We will go through your brief, prepare a first draft of the solution and walk you through it on a short, no-obligation call.',
    regards: 'Best regards,',
    team: 'the nosleephouse team',
    service: {
      default: { reply: '24 hours', topic: 'about your website', subject: 'Thank you for your trust. Your first step towards more customers is done.' },
      'AI kreativy': { reply: 'a few hours', topic: 'about your ads', subject: 'Thank you for your trust. Your first step towards ads that sell is done.' },
      'AI automatizace': { reply: 'a few hours', topic: 'about your company and processes', subject: 'Thank you for your trust. Your first step towards less admin is done.' },
    },
  },
}

function emailCopy(body: FormPayload) {
  const lang: Lang = body.locale === 'sk' || body.locale === 'en' ? body.locale : 'cs'
  const e = EMAIL[lang]
  const key = (body.service && body.service in e.service ? body.service : 'default') as ServiceKey
  return { e, s: e.service[key] }
}

function buildClientThankYouEmail(body: FormPayload) {
  const { e, s } = emailCopy(body)
  const firstName = (body.name || '').trim().split(/\s+/)[0] || ''
  const greeting = e.hi(esc(firstName))
  const p = 'color:rgba(255,255,255,0.72);font-size:15px;line-height:1.75;'

  const html = `
  <div style="background:#1a2f2f;padding:40px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#142020;border:1px solid rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
      <div style="padding:26px 34px;border-bottom:1px solid rgba(255,255,255,0.08);">
        <span style="color:#b2fb58;font-weight:800;font-size:17px;letter-spacing:-0.02em;">nosleephouse</span>
      </div>
      <div style="padding:40px 34px;">
        <span style="display:inline-block;background:#b2fb58;color:#1a2f2f;font-weight:700;font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:6px 13px;border-radius:2px;margin-bottom:24px;">
          ${e.badge}
        </span>
        <h1 style="color:#ffffff;font-size:25px;font-weight:700;margin:0 0 20px;line-height:1.3;letter-spacing:-0.02em;">
          ${greeting}<br>${e.thanks}
        </h1>
        <p style="${p}margin:0 0 18px;">${e.received(s.reply, s.topic)}</p>
        <p style="${p}margin:0 0 30px;">${e.booked(s.reply)}</p>
        <div style="background:rgba(178,251,88,0.06);border:1px solid rgba(178,251,88,0.22);border-radius:2px;padding:20px 22px;">
          <p style="color:#b2fb58;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin:0 0 8px;">${e.nextTitle}</p>
          <p style="color:rgba(255,255,255,0.68);font-size:14px;line-height:1.65;margin:0;">${e.next}</p>
        </div>
      </div>
      <div style="padding:22px 34px;border-top:1px solid rgba(255,255,255,0.08);">
        <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;line-height:1.6;">
          ${e.regards}<br><span style="color:rgba(255,255,255,0.7);">${e.team}</span>
        </p>
      </div>
    </div>
    <p style="max-width:600px;margin:18px auto 0;color:rgba(255,255,255,0.32);font-size:11px;text-align:center;">
      nosleephouse s.r.o. &middot; info@nosleephouse.com
    </p>
  </div>`

  const strip = (h: string) => h.replace(/<[^>]+>/g, '')
  const text = [
    `${e.hi(firstName)} ${e.thanks}`,
    '',
    strip(e.received(s.reply, s.topic)),
    '',
    e.booked(s.reply),
    '',
    `${e.nextTitle} ${e.next}`,
    '',
    e.regards,
    e.team,
  ].join('\n')

  return { html, text, subject: s.subject }
}

async function sendEmail(payload: {
  apiKey: string
  to: string
  replyTo?: string
  subject: string
  html: string
  text: string
}) {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${payload.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: payload.to,
      reply_to: payload.replyTo,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    }),
  })
}

export async function POST(req: NextRequest) {
  try {
    const body: FormPayload = await req.json()
    const isPartial = body.partial === true

    const lang = body.locale && body.locale !== 'cs' ? body.locale.toUpperCase() : ''
    const tag = body.service || lang ? ` (${[body.service, lang].filter(Boolean).join(', ')})` : ''
    const subject = isPartial
      ? `[NSH] Nedokončený formulář${tag}: ${body.email ?? 'neznámý'}`
      : `[NSH] Nová poptávka${tag}: ${body.name ?? ''} (${body.email ?? '-'})`.trim()

    const apiKey = process.env.RESEND_API_KEY
    // Graceful stub: without a key we can't send, but the lead flow must still
    // complete (Pixel + redirect). Log it so nothing is silently lost in dev.
    if (!apiKey) {
      console.warn('[formular] RESEND_API_KEY not set — lead not emailed:', {
        subject,
        email: body.email,
        name: body.name,
      })
      return NextResponse.json({ ok: true, stubbed: true })
    }

    const { html, text } = buildLeadEmail(body, isPartial)
    const res = await sendEmail({
      apiKey,
      to: LEAD_INBOX,
      replyTo: safeReplyTo(body.email),
      subject,
      html,
      text,
    })

    if (!res.ok) {
      console.error('[formular] resend error:', res.status, await res.text())
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    // On a fully completed form, also send the lead a branded confirmation.
    // Best-effort — a failure here must not affect the internal notification.
    const clientEmail = safeReplyTo(body.email)
    if (!isPartial && clientEmail) {
      const { html: clientHtml, text: clientText, subject: clientSubject } = buildClientThankYouEmail(body)
      const clientRes = await sendEmail({
        apiKey,
        to: clientEmail,
        subject: clientSubject,
        html: clientHtml,
        text: clientText,
      })
      if (!clientRes.ok) {
        console.error('[formular] client confirmation error:', clientRes.status)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[formular] send error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
