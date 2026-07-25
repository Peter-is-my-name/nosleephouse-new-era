'use client'
import { useEffect, useState } from 'react'
import { Logo, ArrowRight } from '../icons'
import './ReklamaHeader.css'

/**
 * Minimal ad-landing header — no nav, so paid traffic stays on the conversion
 * path. Logo · phone · single CTA that scrolls to the lead form (#konzultace).
 */
export default function ReklamaHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toForm = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('konzultace')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`rk-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container rk-header-inner">
        <a href="#top" className="rk-logo" aria-label="nosleephouse">
          <Logo height={44} />
        </a>

        <div className="rk-header-right">
          <span className="rk-badge">
            <span className="rk-dot" aria-hidden="true" />
            Návrh webu zdarma
          </span>
          <a href="#konzultace" onClick={toForm} className="btn btn-primary rk-cta">
            Chci více poptávek
            <ArrowRight size={9} />
          </a>
        </div>
      </div>
    </header>
  )
}
