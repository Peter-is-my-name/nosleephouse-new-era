import type { CSSProperties } from 'react'
import SectionHead from '../funnel/SectionHead'
import ToFormButton from '../funnel/ToFormButton'
import { CheckIcon } from '../funnel/Icons'
import { rich } from '@/lib/rich'
import type { CreativesCopy } from '@/lib/funnel/types'
import './AkProcess.css'

/* Process lowers perceived risk (you approve the script before production),
   deliverables make the value concrete. */
export default function AkProcess({ c, cta }: { c: CreativesCopy['process']; cta: string }) {
  return (
    <section className="fn-section ink">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={rich(c.title)} lead={c.lead} />

        <ol className="fn-steps">
          {c.steps.map((s, i) => (
            <li
              key={i}
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
        <p className="ak-process-note reveal">{c.note}</p>

        <div className="ak-gets">
          <SectionHead eyebrow={c.getsEyebrow} title={rich(c.getsTitle)} />
          <div className="fn-checks">
            {c.gets.map((g, i) => (
              <div
                key={i}
                className="fn-card fn-check reveal-scale"
                style={{ '--d': `${(i % 2) * 0.07}s` } as CSSProperties}
              >
                <span className="fn-ico-ok">
                  <CheckIcon size={12} />
                </span>
                <div>
                  <strong>{g.t}</strong>
                  <span className="fn-check-text">{g.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fn-cta reveal">
          <ToFormButton label={cta} />
          <span className="fn-cta-note">{c.ctaNote}</span>
        </div>
      </div>
    </section>
  )
}
