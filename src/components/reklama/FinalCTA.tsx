'use client'
import Image from 'next/image'
import { ArrowRight, Star } from '../icons'
import './FinalCTA.css'

const AVATARS = [
  { src: '/assets/testimonials/jakub.jpg', alt: 'Jakub Haidari' },
  { src: '/assets/testimonials/radek.jpg', alt: 'Radek' },
  { src: '/assets/testimonials/dominika.jpg', alt: 'Dominika' },
  { src: '/assets/testimonials/filip.jpg', alt: 'Filip' },
]

export default function FinalCTA() {
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
            Jen pár míst týdně
          </span>
          <h2 className="fcta-heading">
            První krok je nejdůležitější.
            <br />
            Rezervujte si <span className="accent">schůzku zdarma</span>
          </h2>
          <p className="fcta-sub">Klikněte na tlačítko a objednejte se na nezávaznou konzultaci.</p>

          <a href="#konzultace" onClick={toForm} className="btn btn-primary fcta-btn rk-btn">
            Chci více poptávek
            <ArrowRight size={10} />
          </a>

          <div className="fcta-proof">
            <div className="fcta-rating">
              <div className="fcta-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} color={i < 4 ? 'var(--green)' : 'rgba(178,251,88,0.35)'} />
                ))}
              </div>
              <span className="fcta-rating-num">4,9/5</span>
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
