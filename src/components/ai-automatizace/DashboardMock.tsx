import type { CSSProperties } from 'react'
import type { AutomationCopy } from '@/lib/funnel/types'
import './DashboardMock.css'

/**
 * Pure HTML/CSS mock of a "Výsledovka" style system (inspired by a real
 * project for a construction company). ALL names and numbers are invented,
 * no client data is ever shown.
 */
/* margin per job, target line at 20 % */
const BARS = [
  { n: 101, m: 31 },
  { n: 102, m: 24 },
  { n: 103, m: 12, bad: true },
  { n: 104, m: 27 },
  { n: 105, m: 22 },
  { n: 106, m: 35 },
]

export default function DashboardMock({ m, compact = false }: { m: AutomationCopy['mock']; compact?: boolean }) {
  return (
    <div className={`dm${compact ? ' dm-compact' : ''}`} aria-hidden="true">
      <div className="dm-bar">
        <span className="dm-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="dm-url">{m.url}</span>
      </div>
      <div className="dm-body">
        <aside className="dm-side">
          <span className="dm-logo">{m.logo}</span>
          {m.nav.map((n, i) => (
            <span key={n} className={`dm-nav${i === 0 ? ' on' : ''}`}>
              {n}
            </span>
          ))}
        </aside>
        <div className="dm-main">
          <div className="dm-title">
            <strong>{m.title}</strong>
            <span>{m.subtitle}</span>
          </div>
          <div className="dm-kpis">
            {m.kpis.map((k) => (
              <div key={k.label} className="dm-kpi">
                <span className="dm-kpi-l">{k.label}</span>
                <span className={`dm-kpi-v${k.good ? ' good' : ''}`}>{k.value}</span>
                <span className="dm-kpi-n">{k.note}</span>
              </div>
            ))}
          </div>
          <div className="dm-panels">
            <div className="dm-panel dm-chart">
              <span className="dm-panel-t">{m.chartTitle}</span>
              <div className="dm-bars">
                {/* bars are drawn at margin × 2 % of the plot height (16px label
                    strip below), so 20 % margin sits at 40 % of the plot */}
                <span className="dm-target" style={{ bottom: 'calc(16px + (100% - 16px) * 0.4)' } as CSSProperties}>
                  {m.target}
                </span>
                {BARS.map((b, i) => (
                  <div key={b.n} className="dm-bar-col">
                    <span
                      className={`dm-bar-fill${b.bad ? ' bad' : ''}`}
                      style={{ height: `${b.m * 2}%`, '--i': i } as CSSProperties}
                    />
                    <span className="dm-bar-id">{`${m.jobPrefix}${b.n}`}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="dm-panel dm-inv">
              <span className="dm-panel-t">{m.invoicesTitle}</span>
              {m.invoices.map(([n, v]) => (
                <div key={n} className="dm-inv-row">
                  <span>
                    {n}
                    <em>AI</em>
                  </span>
                  <b>{v}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
