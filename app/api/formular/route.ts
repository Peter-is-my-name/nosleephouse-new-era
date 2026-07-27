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
          ${row('Typ webu', body.websiteType)}
          ${row('Rozpočet', body.budget)}
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
    `Typ webu: ${body.websiteType ?? '-'}`,
    `Rozpočet: ${body.budget ?? '-'}`,
    `Zdroj: ${body.source ?? '-'}`,
  ].join('\n')

  return { html, text }
}

function buildClientThankYouEmail(body: FormPayload) {
  const firstName = (body.name || '').trim().split(/\s+/)[0] || ''
  const greeting = firstName ? `Ahoj ${firstName},` : 'Ahoj,'

  const html = `
  <div style="background:#0a0a0a;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid rgba(255,255,255,0.07);border-radius:16px;overflow:hidden;">
      <div style="background:#0a0a0a;padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.07);">
        <span style="color:#B2FB58;font-weight:800;font-size:15px;letter-spacing:-0.02em;">nosleephouse</span>
      </div>
      <div style="padding:36px 32px;">
        <span style="display:inline-block;background:#B2FB58;color:#0a0a0a;font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:5px 12px;border-radius:6px;margin-bottom:20px;">
          Poptávka přijata
        </span>
        <h1 style="color:#fafafa;font-size:22px;font-weight:700;margin:0 0 16px;line-height:1.35;">
          ${greeting}<br>děkujeme za váš čas.
        </h1>
        <p style="color:#c9c9c9;font-size:15px;line-height:1.7;margin:0 0 16px;">
          Vaši poptávku jsme právě přijali a už se na ni díváme. Ozveme se vám
          do <strong style="color:#fafafa;">24 hodin</strong> s konkrétními
          návrhy na míru tomu, co jste nám o svém webu prozradili.
        </p>
        <p style="color:#c9c9c9;font-size:15px;line-height:1.7;margin:0 0 28px;">
          Pokud jste si už vybrali termín konzultace v kalendáři, uvidíme se
          tam — pokud ne, klidně odpovězte na tento e-mail a domluvíme se.
        </p>
        <div style="background:#0a0a0a;border:1px solid rgba(178,251,88,0.25);border-radius:10px;padding:18px 20px;margin-bottom:8px;">
          <p style="color:#B2FB58;font-size:13px;font-weight:600;margin:0 0 4px;">Co bude dál?</p>
          <p style="color:#a1a1a1;font-size:13px;line-height:1.6;margin:0;">
            Projdeme si vaše zadání, připravíme prvotní návrh řešení a probereme
            ho spolu na krátkém hovoru — bez závazků.
          </p>
        </div>
      </div>
      <div style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.07);">
        <p style="color:#4a4a4a;font-size:12px;margin:0;">
          S pozdravem,<br><span style="color:#7a7a7a;">tým nosleephouse</span>
        </p>
      </div>
    </div>
  </div>`

  const text = [
    `${greeting} děkujeme za váš čas.`,
    '',
    'Vaši poptávku jsme právě přijali a už se na ni díváme. Ozveme se vám do 24 hodin s konkrétními návrhy na míru tomu, co jste nám o svém webu prozradili.',
    '',
    'Pokud jste si už vybrali termín konzultace v kalendáři, uvidíme se tam — pokud ne, klidně odpovězte na tento e-mail a domluvíme se.',
    '',
    'S pozdravem,',
    'tým nosleephouse',
  ].join('\n')

  return { html, text }
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

    const subject = isPartial
      ? `[NSH] Nezavřený formulář: ${body.email ?? 'neznámý'}`
      : `[NSH] Nová poptávka: ${body.name ?? ''} (${body.email ?? '-'})`.trim()

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
      const { html: clientHtml, text: clientText } = buildClientThankYouEmail(body)
      const clientRes = await sendEmail({
        apiKey,
        to: clientEmail,
        subject: 'Děkujeme za vaši poptávku — ozveme se do 24 hodin',
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
