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
  <div style="background:#1a2f2f;padding:40px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#142020;border:1px solid rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
      <div style="padding:26px 34px;border-bottom:1px solid rgba(255,255,255,0.08);">
        <span style="color:#b2fb58;font-weight:800;font-size:17px;letter-spacing:-0.02em;">nosleephouse</span>
      </div>
      <div style="padding:40px 34px;">
        <span style="display:inline-block;background:#b2fb58;color:#1a2f2f;font-weight:700;font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:6px 13px;border-radius:2px;margin-bottom:24px;">
          Poptávka přijata
        </span>
        <h1 style="color:#ffffff;font-size:25px;font-weight:700;margin:0 0 20px;line-height:1.3;letter-spacing:-0.02em;">
          ${greeting}<br>děkujeme za váš čas.
        </h1>
        <p style="color:rgba(255,255,255,0.72);font-size:15px;line-height:1.75;margin:0 0 18px;">
          Vaši poptávku jsme právě přijali a už se na ni díváme. Ozveme se vám
          do <strong style="color:#ffffff;">24 hodin</strong> s konkrétními
          návrhy na míru tomu, co jste nám o svém webu prozradili.
        </p>
        <p style="color:rgba(255,255,255,0.72);font-size:15px;line-height:1.75;margin:0 0 30px;">
          Pokud jste si už vybrali termín v kalendáři, skvěle, uvidíme se na
          schůzce. Pokud ne, ozveme se vám do 24 hodin a termín domluvíme společně.
        </p>
        <div style="background:rgba(178,251,88,0.06);border:1px solid rgba(178,251,88,0.22);border-radius:2px;padding:20px 22px;">
          <p style="color:#b2fb58;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin:0 0 8px;">Co bude dál?</p>
          <p style="color:rgba(255,255,255,0.68);font-size:14px;line-height:1.65;margin:0;">
            Projdeme si vaše zadání, připravíme prvotní návrh řešení a probereme
            ho spolu na krátkém hovoru bez závazků.
          </p>
        </div>
      </div>
      <div style="padding:22px 34px;border-top:1px solid rgba(255,255,255,0.08);">
        <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;line-height:1.6;">
          S pozdravem,<br><span style="color:rgba(255,255,255,0.7);">tým nosleephouse</span>
        </p>
      </div>
    </div>
    <p style="max-width:600px;margin:18px auto 0;color:rgba(255,255,255,0.32);font-size:11px;text-align:center;">
      nosleephouse s.r.o. &middot; nosleephouse@gmail.com
    </p>
  </div>`

  const text = [
    `${greeting} děkujeme za váš čas.`,
    '',
    'Vaši poptávku jsme právě přijali a už se na ni díváme. Ozveme se vám do 24 hodin s konkrétními návrhy na míru tomu, co jste nám o svém webu prozradili.',
    '',
    'Pokud jste si už vybrali termín v kalendáři, skvěle, uvidíme se na schůzce. Pokud ne, ozveme se vám do 24 hodin a termín domluvíme společně.',
    '',
    'Co bude dál? Projdeme si vaše zadání, připravíme prvotní návrh řešení a probereme ho spolu na krátkém hovoru bez závazků.',
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
        subject: 'Děkujeme za vaši důvěru. První krok k více zákazníkům je za vámi.',
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
