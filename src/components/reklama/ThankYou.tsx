'use client'
import { useEffect } from 'react'
import { Logo } from '../icons'
import { fbqTrack } from '@/lib/metaPixel'
import type { Locale } from '@/lib/i18n'
import { FUNNEL_UI } from '@/lib/funnel/ui'
import './ThankYou.css'

const CALENDLY_URL =
  'https://calendly.com/nosleephouse/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=141414&text_color=fafafa&primary_color=b2fb58'

function CalendlyEmbed() {
  useEffect(() => {
    const LINK = 'https://assets.calendly.com/assets/external/widget.css'
    const SRC = 'https://assets.calendly.com/assets/external/widget.js'
    if (!document.querySelector(`link[href="${LINK}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = LINK
      document.head.appendChild(link)
    }
    if (!document.querySelector(`script[src="${SRC}"]`)) {
      const script = document.createElement('script')
      script.src = SRC
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, width: '100%', height: 700 }}
    />
  )
}

/** backHref: the landing page this thank-you page belongs to (/reklama by default). */
export default function ThankYou({
  backHref = '/reklama',
  locale = 'cs',
  analysis = false,
}: { backHref?: string; locale?: Locale; analysis?: boolean } = {}) {
  const ui = FUNNEL_UI[locale].thanks
  // Fire the Lead conversion (Pixel + CAPI) once on arrival, reading the payload
  // the form stashed in sessionStorage just before redirecting here. Shared
  // event_id lets Meta deduplicate the browser + server events.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('nsh_lead_event')
      if (!raw) return
      const payload = JSON.parse(raw) as {
        event_id: string
        email?: string
        phone?: string
        first_name?: string
        last_name?: string
        fbp?: string
        fbc?: string
        content_category?: string
      }
      sessionStorage.removeItem('nsh_lead_event')

      fbqTrack(
        'Lead',
        payload.content_category ? { content_category: payload.content_category } : {},
        payload.event_id
      )

      fetch('/api/meta-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          event_id: payload.event_id,
          event_source_url: window.location.href,
          email: payload.email,
          phone: payload.phone,
          first_name: payload.first_name,
          last_name: payload.last_name,
          fbp: payload.fbp,
          fbc: payload.fbc,
          content_category: payload.content_category,
        }),
        keepalive: true,
      }).catch(() => {})
    } catch {
      /* best-effort — never block render on tracking */
    }
  }, [])

  return (
    <div className="ty">
      <header className="ty-header">
        <div className="container ty-header-inner">
          <a href={backHref} aria-label="nosleephouse">
            <Logo height={40} />
          </a>
        </div>
      </header>

      <main className="ty-main">
        <div className="ty-check" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="ty-received">{ui.received}</p>
        <h1 className="ty-heading">{analysis ? ui.headingAnalysis : ui.heading}</h1>
        <p className="ty-sub">
          {ui.sub}
        </p>

        <div className="ty-calendly">
          <CalendlyEmbed />
        </div>

        <div className="ty-foot">
          <p className="ty-noslot">{ui.noSlot}</p>
          <a href={backHref} className="btn btn-outline ty-back">
            {ui.back}
          </a>
        </div>
      </main>
    </div>
  )
}
