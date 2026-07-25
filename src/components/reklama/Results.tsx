import Image from 'next/image'
import './Results.css'

// Widths/heights mirror LogosMarquee so the SVGs (many are width="100%")
// never stretch to fill their box.
const LOGOS = [
  { src: '/assets/logos/realityexpo.svg', alt: 'Reality EXPO', cls: 'l-rex' },
  { src: '/assets/logos/forbes.svg', alt: 'Forbes', cls: 'l-forbes' },
  { src: '/assets/logos/coex.svg', alt: 'COex', cls: 'l-coex' },
  { src: '/assets/logos/eldenea.svg', alt: 'Eldenea', cls: 'l-eld' },
  { src: '/assets/logos/atalian.png', alt: 'Atalian', cls: 'l-atalian' },
  { src: '/assets/logos/abra.png', alt: 'Abra', cls: 'l-abra' },
]

const STATS = [
  { value: '3+', label: 'roky spolupráce' },
  { value: '30+', label: 'vystavovatelů' },
  { value: '4200+', label: 'registrací' },
]

export default function Results() {
  return (
    <section className="rs">
      <div className="container">
        <h2 className="rs-heading reveal">
          Bohaté <span className="accent">zkušenosti.</span>
        </h2>

        <div className="rs-card reveal-scale">
          <div className="rs-card-media">
            <Image
              src="/assets/reklama/reality-expo-event.webp"
              alt="Reality EXPO — veletrh plný návštěvníků"
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
              Důvěra firmy 3+ let
            </span>
            <h3 className="rs-card-title">Reality EXPO</h3>
            <p className="rs-card-text">
              Web a kampaně, kterým firma důvěřuje přes 3 roky. Přes 30 vystavovatelů, tisíce
              registrací. Kompletní řešení od prvního návrhu po běžící reklamní kampaně.
            </p>
            <div className="rs-stats">
              {STATS.map((s) => (
                <div className="rs-stat" key={s.label}>
                  <div className="rs-stat-value">{s.value}</div>
                  <div className="rs-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rs-logos reveal">
          <p className="rs-logos-label">Firmy, které nám důvěřují</p>
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
