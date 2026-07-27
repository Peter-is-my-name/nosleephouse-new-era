'use client'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ArrowRight, Star, GoogleLogo } from '../icons'
import '../Hero.css'
import './ReklamaHero.css'

const heroVisual = '/assets/hero.jpg'

/* Same Figma notch shape as the homepage hero (node 0:2167). */
const HERO_SHAPE_PATH =
  'M663.564 608.831C663.564 614.98 658.58 619.965 652.431 619.965H11.1336C4.98467 619.965 0 614.98 0 608.831V452.149C0 448.074 2.22697 444.324 5.80567 442.373L376.708 240.231C380.287 238.28 382.514 234.53 382.514 230.455V151.681C382.514 147.599 384.747 143.845 388.334 141.897L647.118 1.36524C654.536 -2.66344 663.564 2.70734 663.564 11.1493V608.831Z'
const HERO_CLIP_PATH =
  'M1 0.98204C1 0.99196 0.99249 1 0.98322 1L0.01678 1C0.00751 1 0 0.99196 0 0.98204L0 0.72931C0 0.72274 0.00336 0.71669 0.00875 0.71354L0.56771 0.38749C0.5731 0.38434 0.57646 0.37829 0.57646 0.37172L0.57646 0.24466C0.57646 0.23808 0.57982 0.23202 0.58522 0.22888L0.97521 0.0022C0.98639 -0.0043 1 0.00437 1 0.01798L1 0.98204Z'

export default function ReklamaHero() {
  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero rk-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="reviews reveal" style={{ '--d': '0.05s' } as CSSProperties}>
            <div className="reviews-left">
              <span className="partner">Hodnocení na</span>
              <GoogleLogo height={24} white />
            </div>
            <div className="reviews-right">
              <div className="stars" aria-label="Hodnocení 5 z 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} />
                ))}
              </div>
              <span className="reviews-count">5 / 5</span>
            </div>
          </div>

          <h1 className="hero-title rk-hero-title reveal" style={{ '--d': '0.15s' } as CSSProperties}>
            Získejte nárůst poptávek díky modernímu webu již <span className="accent">za 7 dní</span> díky
            našemu efektivnímu procesu od návrhu po spuštění.
          </h1>

          <p className="hero-sub reveal" style={{ '--d': '0.32s' } as CSSProperties}>
            Bez komplikací a zbytečných starostí.
          </p>

          <div className="rk-hero-actions reveal" style={{ '--d': '0.44s' } as CSSProperties}>
            <a href="#konzultace" onClick={toForm} className="btn btn-primary hero-btn rk-btn">
              Chceme více poptávek
              <ArrowRight size={10} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-inner">
            <svg
              className="hero-echoes"
              viewBox="0 0 663.564 619.965"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {[9, 21, 33, 45, 57, 69].map((o, i) => (
                <path
                  key={o}
                  d={HERO_SHAPE_PATH}
                  transform={`translate(0 ${-o})`}
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                  style={{ '--echo-i': i } as CSSProperties}
                />
              ))}
            </svg>
            <div className="hero-shape">
              <div className="hero-img-wrap">
                <Image
                  src={heroVisual}
                  alt="Tým nosleephouse na veletrhu"
                  fill
                  priority
                  className="hero-img"
                  sizes="(max-width: 980px) 100vw, 54vw"
                />
              </div>
            </div>
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
              <defs>
                <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                  <path d={HERO_CLIP_PATH} />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span
            className="hero-badge badge-projects reveal"
            style={{ '--d': '0.7s' } as CSSProperties}
          >
            <strong>150+</strong>&nbsp;realizovaných projektů od roku 2019
          </span>
          <span
            className="hero-badge badge-team reveal"
            style={{ '--d': '0.8s' } as CSSProperties}
          >
            <strong>8</strong>&nbsp;seniorních odborníků v týmu
          </span>
        </div>
      </div>
    </section>
  )
}
