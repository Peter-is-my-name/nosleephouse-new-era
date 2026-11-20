import type { CSSProperties } from 'react'
import SectionHead from '../funnel/SectionHead'
import { CheckIcon, XIcon } from '../funnel/Icons'
import ToFormButton from '../funnel/ToFormButton'
import { rich } from '@/lib/rich'
import type { CreativesCopy } from '@/lib/funnel/types'
import './AkProblem.css'

/* Problem → agitation: why ads stop paying off. Each card names a pain the
   owner already feels, so the solution below lands as relief, not a pitch. */
export default function AkProblem({ c, cta }: { c: CreativesCopy['problem']; cta: string }) {
  return (
    <section className="fn-section ink ak-problem">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={rich(c.title)} lead={c.lead} />

        <div className="ak-pains">
          {c.pains.map((p, i) => (
            <article
              key={i}
              className="fn-card ak-pain reveal-scale"
              style={{ '--d': `${i * 0.08}s` } as CSSProperties}
            >
              <span className="fn-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>

        <div className="ak-turn reveal">
          <p className="ak-turn-kicker">{c.turnKicker}</p>
          <h3 className="ak-turn-title">{c.turnTitle}</h3>
        </div>

        <div className="fn-compare reveal" role="table" aria-label={c.compareAria}>
          <div className="fn-c-row" role="row">
            <div className="fn-c-cell fn-c-head" role="columnheader" />
            <div className="fn-c-cell fn-c-head" role="columnheader">{c.colOld}</div>
            <div className="fn-c-cell fn-c-head ours" role="columnheader">{c.colNew}</div>
          </div>
          {c.rows.map(([label, old, now]) => (
            <div key={label} className="fn-c-row" role="row">
              <div className="fn-c-cell fn-c-label" role="rowheader">{label}</div>
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

        <div className="fn-cta reveal">
          <ToFormButton label={cta} />
          <span className="fn-cta-note">{c.ctaNote}</span>
        </div>
      </div>
    </section>
  )
}
