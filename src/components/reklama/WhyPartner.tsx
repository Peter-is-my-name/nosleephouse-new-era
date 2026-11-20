'use client'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ArrowRight } from '../icons'
import { rich } from '@/lib/rich'
import type { WebCopy } from '@/lib/funnel/types'
import './WhyPartner.css'

const IMAGES = [
  '/assets/reklama/why-1.jpg',
  '/assets/reklama/why-2.jpg',
  '/assets/reklama/why-3.jpg',
  '/assets/reklama/why-4.jpg',
]

export default function WhyPartner({ c, cta }: { c: WebCopy['why']; cta: string }) {
  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="wp">
      <div className="container">
        <div className="wp-head">
          <span className="wp-eyebrow reveal">{c.eyebrow}</span>
          <h2 className="wp-heading reveal" style={{ '--d': '0.06s' } as CSSProperties}>
            {rich(c.heading)}
          </h2>
        </div>

        <div className="wp-grid">
          {IMAGES.map((img, i) => (
            <article
              className="wp-card reveal-scale"
              key={i}
              style={{ '--d': `${(i % 2) * 0.1}s` } as CSSProperties}
            >
              <div className="wp-card-media">
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="wp-card-img"
                  loading="lazy"
                />
                <span className="wp-card-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="wp-card-text">{c.items[i]}</p>
            </article>
          ))}
        </div>

        <div className="wp-cta reveal">
          <a href="#konzultace" onClick={toForm} className="btn btn-primary rk-btn">
            {cta}
            <ArrowRight size={10} />
          </a>
        </div>
      </div>
    </section>
  )
}
