'use client'
import { useEffect } from 'react'
import { Logo } from './icons'
import './reklama/ThankYou.css'

/**
 * Homepage thank-you page. Visually identical to the /reklama thank-you, but
 * intentionally does NOT fire any Meta conversion (Pixel/CAPI) — lead-conversion
 * tracking lives only on the /reklama funnel.
 */

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

export default function ThankYou2() {
  return (
    <div className="ty">
      <header className="ty-header">
        <div className="container ty-header-inner">
          <a href="/" aria-label="nosleephouse">
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

        <h1 className="ty-heading">Rezervujte si svůj termín konzultace níže 👇</h1>
        <p className="ty-sub">
          Berte to vážně, jak je to jen možné. Každý den máme jen několik setkání a skutečně vám
          chceme předat hodnotu, takže si vyberte termín, kdy máte 100&nbsp;% čas.
        </p>

        <div className="ty-calendly">
          <CalendlyEmbed />
        </div>

        <div className="ty-foot">
          <p className="ty-noslot">Pokud termín nevyhovuje, ozveme se vám sami.</p>
          <a href="/" className="btn btn-outline ty-back">
            ← Zpět na hlavní stránku
          </a>
        </div>
      </main>
    </div>
  )
}
