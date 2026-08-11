import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { rich } from '@/lib/rich'
import type { CaseSlug } from '@/lib/routes'
import type { StandardCase } from '@/lib/content/cases'
import { CASE_LAYOUT } from './caseLayout'
import CaseHero from './CaseHero'
import CaseFooter from './CaseFooter'
import './CaseStudy.css'

/**
 * The editorial case-study layout used by Reality EXPO, Aparsia and JUN Matcha:
 * hero → brief → challenge → solution → gallery → deliverables → results →
 * testimonial → next project → CTA. DUOPET uses the CaseStudyV2 layout instead.
 */
export default function StandardCaseStudy({
  locale,
  slug,
  data,
}: {
  locale: Locale
  slug: CaseSlug
  data: StandardCase
}) {
  const t = getDictionary(locale).caseChrome
  const layout = CASE_LAYOUT[slug]

  return (
    <>
      <CaseHero locale={locale} layout={layout} meta={data} />

      {/* ── BRIEF — 2-column editorial ────────────────────── */}
      <section className="cs-brief">
        <div className="container cs-brief-grid">
          <div className="cs-brief-left">
            <p className="cs-section-label reveal">{t.brief}</p>
            <h2 className="cs-brief-heading reveal">{rich(data.briefHeading)}</h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">{data.briefBody[0]}</p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              {data.briefBody[1]}
            </p>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE ─────────────────────────────────────── */}
      <section className="cs-challenge">
        <div className="container">
          <p className="cs-section-label reveal">{t.challenge}</p>
          <h2 className="cs-challenge-heading reveal">{rich(data.challengeHeading)}</h2>
          <div className="cs-deliv-grid cs-challenge-grid">
            {data.challenges.map((c, i) => (
              <div
                key={c.num}
                className="cs-deliv-item reveal"
                style={{ '--d': `${i * 0.09}s` } as CSSProperties}
              >
                <span className="cs-deliv-num">{c.num}</span>
                <h3 className="cs-deliv-title">{c.title}</h3>
                <p className="cs-deliv-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────── */}
      <section className="cs-brief cs-solution">
        <div className="container cs-brief-grid">
          <div className="cs-brief-left">
            <p className="cs-section-label reveal">{t.solution}</p>
            <h2 className="cs-brief-heading reveal">{rich(data.solutionHeading)}</h2>
          </div>
          <div className="cs-brief-right">
            <p className="cs-brief-body reveal">{data.solutionBody[0]}</p>
            <p className="cs-brief-body reveal" style={{ '--d': '0.1s' } as CSSProperties}>
              {data.solutionBody[1]}
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY — placeholders, to be replaced with real assets ── */}
      <section className="cs-gallery">
        <div className="container cs-gallery-grid">
          {data.gallery.map((label, i) => (
            <div
              key={label}
              className="cs-gallery-item reveal-scale"
              style={i > 0 ? ({ '--d': '0.08s' } as CSSProperties) : undefined}
            >
              <div className="cs-placeholder" aria-hidden="true">
                <span>
                  {t.placeholder}: {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DELIVERABLES ──────────────────────────────────── */}
      <section className="cs-deliverables">
        <div className="container">
          <p className="cs-section-label reveal">{t.whatWeMade}</p>
          <div className="cs-deliv-grid">
            {data.deliverables.map((d, i) => (
              <div
                key={d.num}
                className="cs-deliv-item reveal"
                style={{ '--d': `${i * 0.09}s` } as CSSProperties}
              >
                <span className="cs-deliv-num">{d.num}</span>
                <h3 className="cs-deliv-title">{d.title}</h3>
                <p className="cs-deliv-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────── */}
      <section className="cs-results">
        <div className="container">
          <p className="cs-section-label reveal">{t.results}</p>
          <h2 className="cs-results-heading reveal">{rich(t.resultsHeading)}</h2>
          <div className="cs-results-grid">
            {data.results.map((r, i) => (
              <div
                key={r.label}
                className="cs-result reveal-scale"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <div className="cs-result-value">{r.value}</div>
                <div className="cs-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseFooter
        locale={locale}
        next={layout.next}
        testimonial={data.testimonial}
        testimonialAvatar={layout.testimonialAvatar}
      />
    </>
  )
}
