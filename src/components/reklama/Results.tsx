import Image from 'next/image'
import { rich } from '@/lib/rich'
import type { WebCopy } from '@/lib/funnel/types'
import './Results.css'

// Widths/heights mirror LogosMarquee so the SVGs (many are width="100%")
// never stretch to fill their box.
const LOGOS = [
  { src: '/assets/logos/realityexpo.svg', alt: 'Reality EXPO', cls: 'l-rex' },
  { src: '/assets/logos/deltaplus.svg', alt: 'Delta Plus', cls: 'l-deltaplus' },
  { src: '/assets/logos/eldenea.svg', alt: 'Eldenea', cls: 'l-eld' },
]


export default function Results({ c }: { c: WebCopy['results'] }) {
  return (
    <section className="rs">
      <div className="container">
        <h2 className="rs-heading reveal">
          {rich(c.heading)}
        </h2>

        <div className="rs-card reveal-scale">
          <div className="rs-card-media">
            <Image
              src="/assets/reklama/reality-expo-event.webp"
              alt={c.imgAlt}
              fill
              className="rs-card-img"
              sizes="(max-width: 860px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="rs-card-body">
            <span className="rs-trust">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1.5 2.5 4v4.5c0 3 2.4 5.8 5.5 6.5 3.1-.7 5.5-3.5 5.5-6.5V4L8 1.5z" stroke="var(--green)" strokeWidth="1.4" />
                <path d="m5.5 8.5 2 1.8 3-3.6" stroke="var(--green)" strokeWidth="1.5" />
              </svg>
              {c.trust}
            </span>
            <h3 className="rs-card-title">{c.title}</h3>
            <p className="rs-card-text">
              {c.text}
            </p>
            <div className="rs-stats">
              {c.stats.map((s) => (
                <div className="rs-stat" key={s.label}>
                  <div className="rs-stat-value">{s.value}</div>
                  <div className="rs-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rs-logos reveal">
          <p className="rs-logos-label">{c.logosLabel}</p>
          <div className="rs-logos-row">
            {LOGOS.map((l) => (
              <img key={l.src} src={l.src} alt={l.alt} className={`rs-logo ${l.cls}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
