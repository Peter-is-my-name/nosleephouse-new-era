import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '../icons'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { rich } from '@/lib/rich'
import { caseHref, contactHref, projectsHref, type CaseSlug } from '@/lib/routes'
import { PROJECT_MEDIA } from '@/lib/content/projectMedia'

type Testimonial = { quote: string; name: string; role: string }

/**
 * The tail of every case study: optional testimonial, the next-project card
 * and the closing CTA. Identical markup across all four studies.
 */
export default function CaseFooter({
  locale,
  next,
  testimonial,
  testimonialAvatar,
}: {
  locale: Locale
  next: CaseSlug
  testimonial?: Testimonial
  testimonialAvatar?: string
}) {
  const d = getDictionary(locale)
  const t = d.caseChrome
  const nextProject = d.projects[next]
  const nextMedia = PROJECT_MEDIA[next]

  return (
    <>
      {testimonial && testimonialAvatar && (
        <section className="cs-testimonial">
          <div className="container cs-testimonial-inner">
            <p className="cs-section-label reveal">{t.testimonial}</p>
            <blockquote className="cs-testimonial-quote reveal">{testimonial.quote}</blockquote>
            <div className="cs-testimonial-author reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              <Image
                className="cs-testimonial-avatar"
                src={testimonialAvatar}
                alt={testimonial.name}
                width={56}
                height={56}
              />
              <div>
                <span className="cs-testimonial-name">{testimonial.name}</span>
                <span className="cs-testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="cs-next">
        <div className="container">
          <p className="cs-section-label">{t.nextProject}</p>
          <a href={caseHref(locale, next)} className="cs-next-card reveal-scale">
            <div className="cs-next-media">
              <Image
                src={nextMedia.img}
                alt={nextProject.brand}
                fill
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 55vw"
                style={nextMedia.nextPos ? { objectPosition: nextMedia.nextPos } : undefined}
              />
            </div>
            <div className="cs-next-info">
              <span className="cs-next-brand">
                {nextProject.brand} · {nextMedia.year}
              </span>
              <h3 className="cs-next-title">
                {nextProject.title}
                <ArrowRight size={20} />
              </h3>
              <span className="cs-next-cta">
                {d.common.viewCaseStudy}
                <ArrowRight size={12} />
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="cs-cta">
        <div className="container cs-cta-inner">
          <div>
            <p className="cs-cta-label">{t.ctaLabel}</p>
            <h2 className="cs-cta-heading">{rich(t.ctaHeading)}</h2>
            <p className="cs-cta-sub">{t.ctaSub}</p>
          </div>
          <div className="cs-cta-actions">
            <Link href={contactHref(locale)} className="btn btn-primary">
              {d.common.bookCall}
              <ArrowRight size={10} />
            </Link>
            <Link href={projectsHref(locale)} className="btn btn-outline">
              {d.common.backToProjects}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
