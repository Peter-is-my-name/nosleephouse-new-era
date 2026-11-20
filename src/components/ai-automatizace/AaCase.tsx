'use client'
import { useState, type CSSProperties } from 'react'
import SectionHead from '../funnel/SectionHead'
import ToFormButton from '../funnel/ToFormButton'
import { CheckIcon } from '../funnel/Icons'
import { rich } from '@/lib/rich'
import type { AutomationCopy, CaseDelta, CaseKweku } from '@/lib/funnel/types'
import './AaCase.css'

/**
 * Two real, named systems our clients use every day (with their consent):
 * KWEKU s.r.o. (job profitability) and Delta Plus (content approval portal).
 * The panels are illustrative mocks; every number and name in them is invented.
 */

/* ── KWEKU mock panels ─────────────────────────────────────── */

function InvoicePanel({ k }: { k: CaseKweku }) {
  return (
    <div className="ac-mock ac-invoice">
      <div className="ac-doc">
        <span className="ac-doc-tag">{k.invoice.file}</span>
        <i style={{ width: '62%' }} />
        <i style={{ width: '40%' }} />
        <i style={{ width: '78%' }} />
        <i style={{ width: '55%' }} />
        <i style={{ width: '70%' }} />
        <i style={{ width: '35%' }} />
        <span className="ac-scan" aria-hidden="true" />
      </div>
      <div className="ac-fields">
        {k.invoice.fields.map(([label, v], i) => (
          <div key={label} className="ac-field" style={{ '--i': i } as CSSProperties}>
            <span>{label}</span>
            <b>{v}</b>
            <em>
              <CheckIcon size={9} />
            </em>
          </div>
        ))}
        <div className="ac-actions">
          <span className="ac-btn-ghost">{k.invoice.reject}</span>
          <span className="ac-btn">{k.invoice.confirm}</span>
        </div>
      </div>
    </div>
  )
}

function MarginPanel({ k }: { k: CaseKweku }) {
  return (
    <div className="ac-mock ac-table">
      <div className="ac-tr ac-th">
        {k.margin.cols.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {k.margin.rows.map(([name, val, m, n]) => (
        <div key={name} className={`ac-tr${n < 20 ? ' warn' : ''}`}>
          <span>{name}</span>
          <span>{val}</span>
          <span className="ac-margin">
            <i style={{ width: `${n * 2.4}%` }} />
            {m}
          </span>
        </div>
      ))}
      <div className="ac-alert bad">{k.margin.alert}</div>
    </div>
  )
}

function LeakPanel({ k }: { k: CaseKweku }) {
  const widths = ['58%', '27%', '15%']
  return (
    <div className="ac-mock ac-leak">
      <div className="ac-alert good">{k.leak.alert}</div>
      <span className="ac-sub-t">{k.leak.costsTitle}</span>
      <div className="ac-stack">
        {widths.map((w, i) => (
          <i key={i} style={{ width: w }} className={`c${i + 1}`} />
        ))}
      </div>
      <div className="ac-legend">
        {k.leak.legend.map((l, i) => (
          <span key={l}>
            <i className={`c${i + 1}`} />
            {l}
          </span>
        ))}
      </div>
      <span className="ac-sub-t">{k.leak.suppliersTitle}</span>
      {k.leak.suppliers.map(([n, w]) => (
        <div key={n} className="ac-sup">
          <span>{n}</span>
          <i style={{ width: `${w}%` }} />
        </div>
      ))}
    </div>
  )
}

function BudgetPanel({ k }: { k: CaseKweku }) {
  const max = Math.max(...k.budget.rows.flatMap(([, p, r]) => [p, r])) * 1.08
  const cls = ['plan', 'real', 'over']
  return (
    <div className="ac-mock ac-budget">
      <span className="ac-sub-t">{k.budget.title}</span>
      {k.budget.rows.map(([n, plan, real]) => (
        <div key={n} className="ac-bud">
          <span className="ac-bud-n">{n}</span>
          <div className="ac-bud-bars">
            <i className="plan" style={{ width: `${(plan / max) * 100}%` }}>
              {plan}
            </i>
            <i className={`real${real > plan ? ' over' : ''}`} style={{ width: `${(real / max) * 100}%` }}>
              {real}
            </i>
          </div>
        </div>
      ))}
      <div className="ac-legend">
        {k.budget.legend.map((l, i) => (
          <span key={l}>
            <i className={cls[i]} />
            {l}
          </span>
        ))}
      </div>
    </div>
  )
}

function ReportPanel({ k }: { k: CaseKweku }) {
  const r = k.report
  return (
    <div className="ac-mock ac-report">
      <div className="ac-file">
        <span className="ac-xls">XLSX</span>
        <div>
          <b>{r.file1}</b>
          <span>{r.file1Note}</span>
        </div>
      </div>
      <div className="ac-sheets">
        {r.sheets.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="ac-file">
        <span className="ac-xls">XLSX</span>
        <div>
          <b>{r.file2}</b>
          <span>{r.file2Note}</span>
        </div>
      </div>
      <div className="ac-due">
        <div>
          <span>{r.due[0]}</span>
          <b>{r.dueValues[0]}</b>
        </div>
        <div>
          <span>{r.due[1]}</span>
          <b className="ok">{r.dueValues[1]}</b>
        </div>
      </div>
    </div>
  )
}

const PANELS = [InvoicePanel, MarginPanel, LeakPanel, BudgetPanel, ReportPanel]

/* ── Delta Plus mock (content approval portal) ─────────────── */

function DeltaMock({ d }: { d: CaseDelta }) {
  const m = d.mock
  return (
    <div className="ac-mock dp-mock">
      <div className="dp-top">
        <img src="/assets/logos/deltaplus.svg" alt="Delta Plus" className="dp-logo" width={95} height={14} />
        <div className="dp-app">
          <b>{m.app}</b>
          <span>{m.sub}</span>
        </div>
        <span className="dp-progress">
          <i />
          {m.progress}
        </span>
      </div>
      <div className="dp-cols">
        {m.columns.map(([label, n], i) => (
          <span key={label} className={`dp-col${i === 2 ? ' on' : ''}`}>
            {label} <b>{n}</b>
          </span>
        ))}
      </div>
      <div className="dp-body">
        <div className="dp-post">
          <img src="/assets/ai-automatizace/deltaplus-post.jpg" alt={m.postTitle} width={360} height={450} loading="lazy" />
          <span className="dp-pin dp-pin-1">1</span>
          <span className="dp-pin dp-pin-2">2</span>
          <span className="dp-hint">{m.pinHint}</span>
        </div>
        <div className="dp-side">
          <b className="dp-post-t">{m.postTitle}</b>
          <span className="dp-post-m">{m.postMeta}</span>
          <span className="dp-returned">{m.returned}</span>
          <span className="dp-ct">{m.commentsTitle}</span>
          {m.comments.map(([who, text], i) => (
            <div key={i} className="dp-comment">
              <span className={`dp-av${i === 0 ? ' client' : ''}`}>{who.slice(0, 2).toUpperCase()}</span>
              <div>
                <b>{who}</b>
                <span>
                  <em>{i + 1}</em> {text}
                </span>
              </div>
            </div>
          ))}
          <span className="dp-upload">{m.upload}</span>
        </div>
      </div>
      <div className="dp-cal">
        <b>{m.calendarTitle}</b>
        <span>{m.calendarNote}</span>
        <div className="dp-cal-row">
          {['Reel', 'Post', 'Reel', '', 'Post', 'Reel', ''].map((t, i) => (
            <span key={i} className={t ? 'has' : ''}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CaseHead({ client, industry, live, title, story }: { client: string; industry: string; live: string; title: string; story: string }) {
  return (
    <div className="ac-head reveal">
      <div className="ac-client">
        <strong>{client}</strong>
        <span>{industry}</span>
        <span className="ac-live">
          <i aria-hidden="true" />
          {live}
        </span>
      </div>
      <h3 className="ac-title">{rich(title)}</h3>
      <p className="ac-story">{story}</p>
    </div>
  )
}

function Results({ items }: { items: string[] }) {
  return (
    <div className="ac-results">
      {items.map((r, i) => (
        <div key={r} className="ac-result reveal-scale" style={{ '--d': `${i * 0.08}s` } as CSSProperties}>
          <span className="fn-ico-ok">
            <CheckIcon size={11} />
          </span>
          {r}
        </div>
      ))}
    </div>
  )
}

export default function AaCase({ c }: { c: AutomationCopy['cases'] }) {
  const [active, setActive] = useState(0)
  const k = c.kweku
  const d = c.delta
  const tab = k.tabs[active]
  const Panel = PANELS[active]
  return (
    <section className="fn-section aa-case" id="pripadove-studie">
      <div className="container">
        <SectionHead eyebrow={c.eyebrow} title={rich(c.title)} lead={c.lead} />

        {/* ── KWEKU ── */}
        <CaseHead client={k.client} industry={k.industry} live={c.live} title={k.title} story={k.story} />
        <div className="ac-wrap reveal-scale">
          <div className="ac-tabs" role="tablist" aria-label={k.tabsAria}>
            {k.tabs.map((x, i) => (
              <button
                key={x.tab}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`ac-tab${i === active ? ' on' : ''}`}
                onClick={(e) => {
                  setActive(i)
                  // keep the chosen tab in view on the scrollable mobile tab bar
                  e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                }}
              >
                <span className="fn-num">{String(i + 1).padStart(2, '0')}</span>
                {x.tab}
              </button>
            ))}
          </div>
          <div className="ac-stage" role="tabpanel">
            <div className="ac-copy" key={`c-${active}`}>
              <h4>{tab.title}</h4>
              <p>{tab.text}</p>
            </div>
            <div className="ac-visual" key={`v-${active}`}>
              <Panel k={k} />
            </div>
          </div>
        </div>
        <Results items={k.results} />

        {/* ── Delta Plus ── */}
        <div className="ac-second">
          <CaseHead client={d.client} industry={d.industry} live={c.live} title={d.title} story={d.story} />
          <div className="dp-grid">
            <div className="dp-visual reveal-scale">
              <DeltaMock d={d} />
            </div>
            <ul className="dp-features">
              {d.features.map((f, i) => (
                <li key={f.t} className="fn-card reveal-scale" style={{ '--d': `${i * 0.07}s` } as CSSProperties}>
                  <span className="fn-ico-ok">
                    <CheckIcon size={11} />
                  </span>
                  <div>
                    <strong>{f.t}</strong>
                    <span>{f.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Results items={d.results} />
        </div>

        <p className="ac-note reveal">{c.mockNote}</p>

        <div className="fn-cta reveal">
          <ToFormButton label={c.cta} />
          <span className="fn-cta-note">{c.ctaNote}</span>
        </div>
      </div>
    </section>
  )
}
