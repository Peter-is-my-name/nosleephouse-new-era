import type { CSSProperties } from 'react'
import { Star, GoogleLogo } from '../icons'
import ToFormButton from '../funnel/ToFormButton'
import { rich } from '@/lib/rich'
import type { CreativesCopy } from '@/lib/funnel/types'
import '../Hero.css'
import '../reklama/ReklamaHero.css'
import './AkHero.css'

/**
 * Hero of the AI creatives page. Copy follows the course formula:
 * pre-headline "Bez + pain" → outcome + timeframe + named method → CTA.
 * Visual: two phones playing real ads (muted loop) = instant proof.
 */
export default function AkHero({ c }: { c: CreativesCopy['hero'] }) {
  return (
    <section id="top" className="hero rk-hero ak-hero">
      <div className="container ak-hero-grid">
        <div className="hero-copy ak-hero-copy">
          <div className="reviews reveal" style={{ '--d': '0.05s' } as CSSProperties}>
            <div className="reviews-left">
              <span className="partner">{c.ratingOn}</span>
              <GoogleLogo height={24} white />
            </div>
            <div className="reviews-right">
              <div className="stars" aria-label={c.ratingAria}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} />
                ))}
              </div>
              <span className="reviews-count">5 / 5</span>
            </div>
          </div>

          <p className="ak-pre reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            {c.pre}
          </p>

          <h1 className="hero-title rk-hero-title ak-title reveal" style={{ '--d': '0.15s' } as CSSProperties}>
            {rich(c.title)}
          </h1>

          <p className="hero-sub ak-sub reveal" style={{ '--d': '0.3s' } as CSSProperties}>
            {c.sub}
          </p>

          <div className="rk-hero-actions reveal" style={{ '--d': '0.42s' } as CSSProperties}>
            <ToFormButton label={c.cta} className="hero-btn" />
            <span className="ak-hero-note">
              {c.note[0]}
              <br />
              {c.note[1]}
            </span>
          </div>
        </div>

        <div className="ak-hero-visual" aria-label={c.visualAria}>
          <div className="ak-phone ak-phone-back">
            <video
              src="/assets/ai-kreativy/noflex-hero.mp4"
              poster="/assets/ai-kreativy/noflex-rozhovor.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          </div>
          <div className="ak-phone ak-phone-front">
            <video
              src="/assets/ai-kreativy/deltaplus-hero.mp4"
              poster="/assets/ai-kreativy/deltaplus-reklama.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={c.frontAria}
            />
          </div>

          {c.chips.map((chip, i) => (
            <span
              key={i}
              className={`ak-chip ak-chip-${i + 1} reveal`}
              style={{ '--d': `${0.6 + i * 0.12}s` } as CSSProperties}
            >
              {rich(chip)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
