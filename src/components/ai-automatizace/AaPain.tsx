import type { CSSProperties } from 'react'
import SectionHead from '../funnel/SectionHead'
import { XIcon } from '../funnel/Icons'
import AaCalculator from './AaCalculator'
import { rich } from '@/lib/rich'
import type { AutomationCopy } from '@/lib/funnel/types'
import './AaPain.css'

/* Self-identification ("that's us") → then let the owner put a number on it. */
export default function AaPain({ c, calc }: { c: AutomationCopy['pain']; calc: AutomationCopy['calc'] }) {
  return (
    <section className="fn-section ink aa-pain">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={rich(c.title)} lead={c.lead} />

        <ul className="aa-symptoms">
          {c.symptoms.map((s, i) => (
            <li
              key={s}
              className="fn-card aa-symptom reveal-scale"
              style={{ '--d': `${(i % 3) * 0.07}s` } as CSSProperties}
            >
              <span className="aa-symptom-x">
                <XIcon size={9} />
              </span>
              {s}
            </li>
          ))}
        </ul>

        <p className="aa-pain-punch reveal">
          {c.punch[0]} <span>{c.punch[1]}</span>
        </p>

        <AaCalculator c={calc} />
      </div>
    </section>
  )
}
