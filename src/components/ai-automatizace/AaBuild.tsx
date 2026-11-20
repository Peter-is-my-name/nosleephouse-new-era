import type { CSSProperties } from 'react'
import SectionHead from '../funnel/SectionHead'
import ToFormButton from '../funnel/ToFormButton'
import { CheckIcon, XIcon } from '../funnel/Icons'
import { rich } from '@/lib/rich'
import type { AutomationCopy } from '@/lib/funnel/types'
import './AaBuild.css'

/* Breadth of capability (owners scan for "their" problem), why custom beats
   boxed software, then a low-risk process that starts with a free analysis. */
export default function AaBuild({
  c,
  p,
  cta,
}: {
  c: AutomationCopy['build']
  p: AutomationCopy['process']
  cta: string
}) {
  return (
    <>
      <section className="fn-section ink">
        <div className="container">
          <SectionHead eyebrow={c.eyebrow} title={rich(c.title)} lead={c.lead} />
          <div className="ab-grid">
            {c.items.map((b, i) => (
              <article
                key={b.t}
                className="fn-card ab-card reveal-scale"
                style={{ '--d': `${(i % 4) * 0.06}s` } as CSSProperties}
              >
                <span className="fn-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </article>
            ))}
          </div>

          <div className="ab-compare-wrap">
            <SectionHead title={rich(c.compareTitle)} />
            <div className="fn-compare reveal" role="table" aria-label={c.compareAria}>
              <div className="fn-c-row" role="row">
                <div className="fn-c-cell fn-c-head" role="columnheader" />
                <div className="fn-c-cell fn-c-head" role="columnheader">
                  {c.colOld}
                </div>
                <div className="fn-c-cell fn-c-head ours" role="columnheader">
                  {c.colNew}
                </div>
              </div>
              {c.rows.map(([label, old, now]) => (
                <div key={label} className="fn-c-row" role="row">
                  <div className="fn-c-cell fn-c-label" role="rowheader">
                    {label}
                  </div>
                  <div className="fn-c-cell fn-c-old" role="cell">
                    <span className="fn-ico-x">
                      <XIcon size={9} />
                    </span>
                    {old}
                  </div>
                  <div className="fn-c-cell fn-c-new" role="cell">
                    <span className="fn-ico-ok">
                      <CheckIcon size={10} />
                    </span>
                    {now}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fn-section">
        <div className="container">
          <SectionHead eyebrow={p.eyebrow} title={rich(p.title)} lead={p.lead} />
          <ol className="fn-steps">
            {p.steps.map((s, i) => (
              <li
                key={s.title}
                className="fn-card fn-step reveal-scale"
                style={{ '--d': `${i * 0.07}s` } as CSSProperties}
              >
                <span className="fn-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="fn-step-when">{s.when}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="fn-cta reveal">
            <ToFormButton label={cta} />
            <span className="fn-cta-note">{p.ctaNote}</span>
          </div>
        </div>
      </section>
    </>
  )
}
