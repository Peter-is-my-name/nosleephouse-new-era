'use client'
import Image from 'next/image'
import { ArrowRight, Star } from '../icons'
import type { Locale } from '@/lib/i18n'
import { FUNNEL_UI } from '@/lib/funnel/ui'
import './FinalCTA.css'

const AVATARS = [
  { src: '/assets/testimonials/jakub.jpg', alt: 'Jakub Haidari' },
  { src: '/assets/testimonials/radek.jpg', alt: 'Radek' },
  { src: '/assets/testimonials/dominika.jpg', alt: 'Dominika' },
  { src: '/assets/testimonials/jonathan.jpg', alt: 'Jonathan' },
]

export default function FinalCTA({
  offer = (
    <>
      Rezervujte si <span className="accent">schůzku zdarma</span>
    </>
  ),
  sub = 'Klikněte na tlačítko a objednejte se na nezávaznou konzultaci.',
  ctaLabel = 'Chci více poptávek',
  locale = 'cs',
}: { offer?: React.ReactNode; sub?: string; ctaLabel?: string; locale?: Locale } = {}) {
  const ui = FUNNEL_UI[locale].final
  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="fcta">
      <div className="container">
        <div className="fcta-card reveal-scale">
          <span className="fcta-eyebrow">
            <span className="fcta-eyebrow-dot" aria-hidden="true" />
            {ui.eyebrow}
          </span>
          <h2 className="fcta-heading">
            {ui.firstStep}
            <br />
            {offer}
          </h2>
          <p className="fcta-sub">{sub}</p>

          <a href="#konzultace" onClick={toForm} className="btn btn-primary fcta-btn rk-btn">
            {ctaLabel}
            <ArrowRight size={10} />
          </a>

          <div className="fcta-proof">
            <div className="fcta-rating">
              <div className="fcta-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <span className="fcta-rating-num">{ui.rating}</span>
            </div>
            <span className="fcta-divider" aria-hidden="true" />
            <div className="fcta-avatars">
              {AVATARS.map(({ src, alt }) => (
                <Image key={src} src={src} alt={alt} width={34} height={34} className="fcta-avatar" loading="lazy" />
              ))}
              <span className="fcta-avatar fcta-avatar-more">+76</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
