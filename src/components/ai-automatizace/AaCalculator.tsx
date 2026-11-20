'use client'
import { useState } from 'react'
import ToFormButton from '../funnel/ToFormButton'
import type { AutomationCopy } from '@/lib/funnel/types'

/**
 * Self-persuasion: the owner enters their own numbers and sees what manual
 * invoice handling costs. Assumption is stated openly on the page:
 * with AI, checking one document takes about a minute.
 */
const AI_MIN_PER_DOC = 1

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  unit,
  prefix,
  fmt,
  onChange,
}: {
  id: string
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  /** currency symbol shown before the number (English "€20") */
  prefix?: string
  fmt: (n: number) => string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="aa-slider">
      <div className="aa-slider-top">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>
          {prefix ? (
            <>
              <span>{prefix}</span>
              {fmt(value)}
            </>
          ) : (
            <>
              {fmt(value)} <span>{unit}</span>
            </>
          )}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--p': `${pct}%` } as React.CSSProperties}
      />
    </div>
  )
}

export default function AaCalculator({ c }: { c: AutomationCopy['calc'] }) {
  const [docs, setDocs] = useState(150)
  const [minutes, setMinutes] = useState(5)
  const [rate, setRate] = useState(c.rateDefault)

  const fmt = (n: number) => Math.round(n).toLocaleString(c.numberLocale)
  /* small values keep one decimal so 0.7 h never shows as "0 hours" */
  const fmtSmall = (n: number) =>
    n < 10
      ? n.toLocaleString(c.numberLocale, { maximumFractionDigits: 1 })
      : fmt(n)
  const plural = new Intl.PluralRules(c.numberLocale)
  const unitFor = (n: number, u: AutomationCopy['calc']['hoursUnits']) => {
    const rounded = n < 10 ? Math.round(n * 10) / 10 : Math.round(n)
    const cat = plural.select(rounded)
    if (cat === 'many') return u.many ?? u.few
    return cat === 'one' ? u.one : cat === 'few' ? u.few : u.other
  }
  const hoursMonth = Math.max(0, (docs * (minutes - AI_MIN_PER_DOC)) / 60)
  const costYear = hoursMonth * rate * 12
  const daysYear = (hoursMonth * 12) / 8
  const prefixCurrency = c.numberLocale.startsWith('en')
  const money = prefixCurrency ? `${c.currency}${fmt(costYear)}` : `${fmt(costYear)} ${c.currency}`

  return (
    <div className="aa-calc reveal-scale">
      <div className="aa-calc-in">
        <span className="fn-num">{c.kicker}</span>
        <h3 className="aa-calc-title">{c.title}</h3>
        <Slider id="calc-docs" label={c.docs} value={docs} min={20} max={1000} step={10} unit={c.unitPcs} fmt={fmt} onChange={setDocs} />
        <Slider id="calc-min" label={c.minutes} value={minutes} min={2} max={15} step={1} unit={c.unitMin} fmt={fmt} onChange={setMinutes} />
        <Slider
          id="calc-rate"
          label={c.rate}
          value={rate}
          min={c.rateMin}
          max={c.rateMax}
          step={c.rateStep}
          unit={c.currency}
          prefix={prefixCurrency ? c.currency : undefined}
          fmt={fmt}
          onChange={setRate}
        />
      </div>

      <div className="aa-calc-out" aria-live="polite">
        <span className="aa-calc-out-l">{c.outLabel}</span>
        <span className="aa-calc-big">
          {fmtSmall(hoursMonth)} <small>{unitFor(hoursMonth, c.hoursUnits)}</small>
        </span>
        <div className="aa-calc-row">
          <div>
            <b>{money}</b>
            <span>{c.moneyLabel}</span>
          </div>
          <div>
            <b>{fmtSmall(daysYear)}</b>
            <span>{unitFor(daysYear, c.daysUnits)}</span>
          </div>
        </div>
        <ToFormButton label={c.cta} className="aa-calc-btn" />
        <p className="aa-calc-note">{c.note}</p>
      </div>
    </div>
  )
}
