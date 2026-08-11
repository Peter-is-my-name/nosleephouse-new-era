import type { CSSProperties } from 'react';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { rich } from '@/lib/rich';
import { getDuopetCase } from '@/lib/content/cases';
import { CASE_LAYOUT } from './caseLayout';
import CaseHero from './CaseHero';
import CaseFooter from './CaseFooter';
import './CaseStudy.css';
import './CaseStudyV2.css';

export default function DuopetCase({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).caseChrome;
  const data = getDuopetCase(locale);
  const layout = CASE_LAYOUT.duopet;

  return (
    <>
      <CaseHero locale={locale} layout={layout} meta={data} />

      {/* ── 2. LEAD — what the client came with ───────────── */}
      <section className="cs2-lead">
        <div className="container">
          <div className="cs2-lead-inner">
            <p className="cs-section-label reveal">{t.clientCameWith}</p>
            <h2 className="cs2-lead-statement reveal">{rich(data.leadStatement)}</h2>
            <p className="cs2-lead-body reveal">{data.leadBody[0]}</p>
            <p className="cs2-lead-body reveal" style={{ '--d': '0.08s' } as CSSProperties}>
              {data.leadBody[1]}
            </p>
            <div className="cs2-chips reveal" style={{ '--d': '0.16s' } as CSSProperties}>
              {data.chips.map((c) => (
                <span key={c} className="cs2-chip">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM — what was not working ─────────────── */}
      <section className="cs2-problem">
        <div className="container">
          <div className="cs2-problem-head">
            <p className="cs-section-label reveal">{t.problemsLabel}</p>
            <h2 className="cs2-heading reveal">{rich(data.problemsHeading)}</h2>
          </div>
          <div className="cs2-prob-list">
            {data.problems.map((p, i) => (
              <div
                key={p.num}
                className="cs2-prob-row reveal"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <span className="cs2-prob-num">{p.num}</span>
                <div>
                  <h3 className="cs2-prob-title">{p.title}</h3>
                  <p className="cs2-prob-body">{p.body}</p>
                </div>
                <div className="cs2-prob-impact">
                  <span className="cs2-prob-impact-label">{t.consequence}</span>
                  <span className="cs2-prob-impact-value">{p.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. GOAL ───────────────────────────────────────── */}
      <section className="cs2-goal">
        <div className="container">
          <div className="cs2-goal-card reveal-scale">
            <p className="cs-section-label" style={{ marginBottom: 0 }}>{t.goal}</p>
            <div>
              <p className="cs2-goal-statement">{rich(data.goalStatement, 'hl')}</p>
              <p className="cs2-goal-sub">{data.goalSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. APPROACH ───────────────────────────────────── */}
      <section className="cs2-approach">
        <div className="container cs2-approach-grid">
          <div>
            <p className="cs-section-label reveal">{t.solution}</p>
            <h2 className="cs2-approach-heading reveal">{rich(data.approachHeading)}</h2>
          </div>
          <div>
            <div className="cs2-steps">
              {data.steps.map((s, i) => (
                <div
                  key={s.label}
                  className="reveal"
                  style={{ '--d': `${i * 0.07}s` } as CSSProperties}
                >
                  <span className="cs2-step-label">{s.label}</span>
                  <p className="cs2-step-body">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="cs2-delivered reveal">
              <span className="cs2-delivered-label">{t.whatWeDelivered}</span>
              <div className="cs2-chips" style={{ marginTop: 0 }}>
                {data.delivered.map((d) => (
                  <span key={d} className="cs2-chip">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. RESULTS — hero metric + supporting ─────────── */}
      <section className="cs2-results">
        <div className="container">
          <div className="cs2-results-head">
            <p className="cs-section-label reveal">{t.results}</p>
            <h2 className="cs2-heading reveal">{rich(data.resultsHeading)}</h2>
          </div>

          <div className="cs2-result-hero reveal-scale">
            <div className="cs2-result-hero-value">{data.heroResult.value}</div>
            <div className="cs2-result-hero-label">{data.heroResult.label}</div>
          </div>

          <div className="cs2-result-grid">
            {data.results.map((r, i) => (
              <div
                key={r.label}
                className="cs2-result reveal-scale"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <div className="cs2-result-value">{r.value}</div>
                <div className="cs2-result-label">{r.label}</div>
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
  );
}
