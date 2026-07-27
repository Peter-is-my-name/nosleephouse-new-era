'use client'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ArrowRight } from '../icons'
import './WhyPartner.css'

const ITEMS = [
  {
    img: '/assets/reklama/why-1.jpg',
    text: 'Postavíme pro vás funkční web podle vašich požadavků na moderních nástrojích a vlastních procesech, který vám ušetří čas i peníze.',
  },
  {
    img: '/assets/reklama/why-2.jpg',
    text: 'Pomohli jsme vytvořit web a kampaně pro Reality Expo, které nám už dva roky důvěřuje. Díky našim výstupům získali přes 30 vystavovatelů a tisíce registrací.',
  },
  {
    img: '/assets/reklama/why-3.jpg',
    text: 'Sledujeme trendy, testujeme nové technologické a marketingové řešení a proměňujeme je ve výsledky, které vám přivedou zákazníky.',
  },
  {
    img: '/assets/reklama/why-4.jpg',
    text: 'Budujeme dlouhodobá partnerství a provázíme vás i po spuštění webu. Od optimalizace až po reklamní kampaně a další rozvoj projektu.',
  },
]

export default function WhyPartner() {
  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="wp">
      <div className="container">
        <div className="wp-head">
          <span className="wp-eyebrow reveal">8 seniorních odborníků v týmu</span>
          <h2 className="wp-heading reveal" style={{ '--d': '0.06s' } as CSSProperties}>
            Proč spolupracovat <span className="accent">s námi?</span>
          </h2>
        </div>

        <div className="wp-grid">
          {ITEMS.map((it, i) => (
            <article
              className="wp-card reveal-scale"
              key={i}
              style={{ '--d': `${(i % 2) * 0.1}s` } as CSSProperties}
            >
              <div className="wp-card-media">
                <Image
                  src={it.img}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="wp-card-img"
                  loading="lazy"
                />
                <span className="wp-card-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="wp-card-text">{it.text}</p>
            </article>
          ))}
        </div>

        <div className="wp-cta reveal">
          <a href="#konzultace" onClick={toForm} className="btn btn-primary rk-btn">
            Chceme více poptávek
            <ArrowRight size={10} />
          </a>
        </div>
      </div>
    </section>
  )
}
