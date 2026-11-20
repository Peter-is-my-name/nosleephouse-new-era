import type { CSSProperties } from 'react'
import { Star, GoogleLogo } from '../icons'
import ToFormButton from '../funnel/ToFormButton'
import { CheckIcon } from '../funnel/Icons'
import DashboardMock from './DashboardMock'
import { rich } from '@/lib/rich'
import type { AutomationCopy } from '@/lib/funnel/types'
import '../Hero.css'
import '../reklama/ReklamaHero.css'
import './AaHero.css'

/**
 * Hero of the AI automation page. Formula: "Bez + pain" → outcome + method →
 * CTA (free process analysis). Proof right under the CTA: the real clients
 * who use our systems every day. Visual = the product itself (dashboard) plus
 * the AI moment owners instantly understand: a photographed invoice read by AI.
 */
export default function AaHero({ c, mock }: { c: AutomationCopy['hero']; mock: AutomationCopy['mock'] }) {
  return (
    <section id="top" className="hero rk-hero aa-hero">
      <div className="container aa-hero-grid">
        <div className="hero-copy aa-hero-copy">
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

          <p className="aa-pre reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            {c.pre}
          </p>

          <h1 className="hero-title rk-hero-title aa-title reveal" style={{ '--d': '0.15s' } as CSSProperties}>
            {rich(c.title)}
          </h1>

          <p className="hero-sub aa-sub reveal" style={{ '--d': '0.3s' } as CSSProperties}>
            {c.sub}
          </p>

          <div className="rk-hero-actions reveal" style={{ '--d': '0.42s' } as CSSProperties}>
            <ToFormButton label={c.cta} className="hero-btn" />
            <span className="aa-hero-note">
              {c.note[0]}
              <br />
              {c.note[1]}
            </span>
          </div>

          <a href="#pripadove-studie" className="aa-usedby reveal" style={{ '--d': '0.52s' } as CSSProperties}>
            <span className="aa-usedby-l">{c.usedBy}</span>
            <span className="aa-usedby-names">
              <img src="/assets/logos/deltaplus.svg" alt="Delta Plus" className="aa-usedby-logo" />
              <span className="aa-usedby-sep" aria-hidden="true" />
              <strong>KWEKU s.r.o.</strong>
            </span>
          </a>
        </div>

        <div className="aa-hero-visual reveal-scale" style={{ '--d': '0.25s' } as CSSProperties}>
          <DashboardMock m={mock} />
          <div className="aa-ai-card">
            <div className="aa-ai-head">
              <span className="aa-ai-badge">AI</span>
              {c.aiCard.title}
              <span className="aa-ai-ok">
                <CheckIcon size={10} />
              </span>
            </div>
            <dl className="aa-ai-fields">
              {c.aiCard.fields.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <span className="aa-ai-time">{c.aiCard.foot}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
