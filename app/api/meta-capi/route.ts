import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

/**
 * Meta Conversions API (server-side) for the /reklama funnel.
 *
 * Fires the same conversion event the browser Pixel fires, sharing an event_id
 * so Meta deduplicates them into one conversion. Server-side events survive
 * ad-blockers / iOS restrictions, improving attribution and match quality.
 *
 * Degrades gracefully: without META_CAPI_ACCESS_TOKEN it logs and returns ok
 * (the browser Pixel still records the event), so the form never breaks.
 */

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2270214106762719'
const GRAPH_VERSION = 'v20.0'

interface CapiPayload {
  event_name?: string
  event_id: string
  event_source_url: string
  email?: string
  phone?: string
  first_name?: string
  last_name?: string
  fbp?: string
  fbc?: string
}

function sha256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

// Meta expects digits only (no +, spaces, punctuation) before hashing.
function normalizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, '')
}

export async function POST(req: NextRequest) {
  try {
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN
    const body: CapiPayload = await req.json()

    if (!body.event_id || !body.event_source_url) {
      return NextResponse.json(
        { error: 'Missing event_id or event_source_url' },
        { status: 400 }
      )
    }

    // Graceful stub: without a token we can't call the Graph API, but the
    // browser Pixel already recorded this event — so return ok, don't break
    // the form. Add META_CAPI_ACCESS_TOKEN on Vercel to enable server-side.
    if (!accessToken) {
      console.warn('[meta-capi] META_CAPI_ACCESS_TOKEN not set — server event skipped:', {
        event: body.event_name ?? 'Contact',
        event_id: body.event_id,
      })
      return NextResponse.json({ ok: true, stubbed: true })
    }

    const forwardedFor = req.headers.get('x-forwarded-for')
    const clientIp =
      forwardedFor?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || undefined
    const clientUserAgent = req.headers.get('user-agent') || undefined

    const fbp = req.cookies.get('_fbp')?.value || body.fbp
    const fbc = req.cookies.get('_fbc')?.value || body.fbc

    const userData: Record<string, unknown> = {}
    if (body.email) userData.em = [sha256(body.email)]
    if (body.phone) userData.ph = [sha256(normalizePhone(body.phone))]
    if (body.first_name) userData.fn = [sha256(body.first_name)]
    if (body.last_name) userData.ln = [sha256(body.last_name)]
    if (fbp) userData.fbp = fbp
    if (fbc) userData.fbc = fbc
    if (clientIp) userData.client_ip_address = clientIp
    if (clientUserAgent) userData.client_user_agent = clientUserAgent

    const eventPayload: Record<string, unknown> = {
      data: [
        {
          event_name: body.event_name ?? 'Contact',
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.event_id,
          event_source_url: body.event_source_url,
          action_source: 'website',
          user_data: userData,
        },
      ],
    }

    // Only attach test_event_code when explicitly set — such events route to
    // the Test Events tab and do NOT count toward ad delivery. Leave UNSET in
    // production.
    const testCode = process.env.META_CAPI_TEST_EVENT_CODE
    if (testCode) eventPayload.test_event_code = testCode

    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventPayload),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      console.error('[meta-capi] Graph API error:', data)
      return NextResponse.json({ error: 'Failed to send event' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, fbtrace_id: data.fbtrace_id })
  } catch (err) {
    console.error('[meta-capi] error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
