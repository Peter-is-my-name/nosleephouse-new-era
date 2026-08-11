import Image from 'next/image'
import { ArrowRight } from '../icons'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { rich } from '@/lib/rich'
import type { CaseLayout } from './caseLayout'

type Meta = {
  heroHeading: string
  heroDesc: string
  client: string
  year: string
  industry: string
  services: string[]
}

/** Shared hero + meta bar, identical across all four case studies. */
export default function CaseHero({
  locale,
  layout,
  meta,
}: {
  locale: Locale
  layout: CaseLayout
  meta: Meta
}) {
  const t = getDictionary(locale).caseChrome

  return (
    <section className="cs-hero">
      {/* full-bleed background image */}
      <div className="cs-hero-bg" aria-hidden="true">
        <Image
          src={layout.heroImg}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: layout.heroPos }}
        />
      </div>
      <div className="cs-hero-overlay" aria-hidden="true" />

      <div className="container cs-hero-inner">
        <div className="cs-hero-text">
          <h1 className="cs-hero-heading">{rich(meta.heroHeading)}</h1>
          <p className="cs-hero-desc">{meta.heroDesc}</p>
        </div>

        {/* bottom meta bar — no dividing lines */}
        <div className="cs-hero-meta" role="list">
          <div className="cs-meta-col" role="listitem">
            <span className="cs-meta-label">{t.client}</span>
            <span className="cs-meta-value">{meta.client}</span>
          </div>
          <div className="cs-meta-col" role="listitem">
            <span className="cs-meta-label">{t.year}</span>
            <span className="cs-meta-value">{meta.year}</span>
          </div>
          <div className="cs-meta-col" role="listitem">
            <span className="cs-meta-label">{t.industry}</span>
            <span className="cs-meta-value">{meta.industry}</span>
          </div>
          <div className="cs-meta-col" role="listitem">
            <span className="cs-meta-label">{t.services}</span>
            <span className="cs-meta-value">{meta.services.join(' · ')}</span>
          </div>
          <div className="cs-meta-col cs-meta-col--cta" role="listitem">
            <a
              href={layout.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-link"
            >
              {layout.liveKind === 'instagram' ? t.viewInstagram : t.viewLive}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
