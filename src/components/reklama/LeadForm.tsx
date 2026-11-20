'use client'
import { gdprHref } from '@/lib/routes'
import { PHONE_COUNTRIES, isValidPhone } from '@/lib/phone'
import { useState, useRef, useCallback, type CSSProperties, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowRight } from '../icons'
import { fbqTrack, getFbp, getFbc } from '@/lib/metaPixel'
import type { Locale } from '@/lib/i18n'
import { FUNNEL_UI } from '@/lib/funnel/ui'
import { tie } from '@/lib/rich'
import './LeadForm.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = (v: string) => EMAIL_RE.test(v.trim())


const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] as const

const WEBSITE_OPTIONS = [
  'Prezentační stránku',
  'Komplexnější vícestránkový web',
  'Firemní web',
  'Reklamní web (jednostránkový web)',
  'E-shop',
  'Už webovou stránku mám, ale potřebuji ji zlepšit.',
  'Chci s vámi probrat něco jiného.',
] as const

const BUDGET_OPTIONS = [
  'Mám k dispozici více než 50 000 Kč a chci investovat do komplexního dokončení a spuštění webu.',
  'Mám bokem alespoň 30 000 Kč a chtěl bych investovat do celkového dokončení nového webu.',
  'Mám bokem jen 15 000 Kč a potřeboval bych z toho na dokončení něco vykouzlit.',
  'Bohužel si teď nemohu dovolit investovat další peníze do dokončení a spuštění webu.',
] as const

/** One qualification question (rendered as lettered option buttons). */
export interface LeadQuestion {
  /** shown above the options */
  label: string
  /** row label in the internal lead e-mail */
  emailLabel: string
  options: readonly string[]
  /** validation message when nothing is picked */
  error: string
}

/**
 * Config for reusing the lead form on other ad landing pages (AI kreativy,
 * AI automatizace...). Every field defaults to the original /reklama values,
 * so <LeadForm /> without props renders exactly the /reklama form.
 */
export interface LeadFormProps {
  /** UI language (labels, validation, e-mail language). Default Czech. */
  locale?: Locale
  /** lead source tag sent to /api/formular */
  source?: string
  /** human service name shown in the lead e-mail + client auto-reply */
  service?: string
  /** thank-you page that fires the Lead conversion */
  redirectTo?: string
  /** Meta content_category on Contact/Lead events (lets Ads tell funnels apart) */
  contentCategory?: string
  liveBadge?: string
  heading?: ReactNode
  sub?: string
  submitLabel?: string
  /** exactly two qualification questions (first = need, second = budget) */
  questions?: readonly [LeadQuestion, LeadQuestion]
}

const REKLAMA_QUESTIONS: readonly [LeadQuestion, LeadQuestion] = [
  {
    label: 'Jaký typ webu potřebujete? *',
    emailLabel: 'Typ webu',
    options: WEBSITE_OPTIONS,
    error: 'Vyberte typ webu.',
  },
  {
    label: 'S jakým rozpočtem počítáte? *',
    emailLabel: 'Rozpočet',
    options: BUDGET_OPTIONS,
    error: 'Vyberte rozpočet.',
  },
]

const AVATARS = [
  { src: '/assets/testimonials/jakub.jpg', alt: 'Jakub H.' },
  { src: '/assets/testimonials/radek.jpg', alt: 'Radek' },
  { src: '/assets/testimonials/dominika.jpg', alt: 'Dominika' },
  { src: '/assets/testimonials/jonathan.jpg', alt: 'Jonathan' },
] as const

interface FormData {
  email: string
  firstName: string
  lastName: string
  phone: string
  phonePrefix: string
  websiteType: string
  budget: string
}
type FormErrors = Partial<Record<keyof FormData, string>>

const EMPTY: FormData = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  phonePrefix: '+420',
  websiteType: '',
  budget: '',
}

function OptionBtn({
  label,
  letter,
  selected,
  onClick,
}: {
  label: string
  letter: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`lf-opt${selected ? ' selected' : ''}`}
      aria-pressed={selected}
    >
      <span className="lf-opt-letter">{letter}</span>
      <span className="lf-opt-label">{tie(label)}</span>
      {selected && (
        <svg className="lf-opt-check" width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

export default function LeadForm({
  locale = 'cs',
  source = 'reklama-inline-form',
  service,
  redirectTo = '/reklama/dotaznik-odeslany',
  contentCategory,
  liveBadge = 'Volná místa tento měsíc',
  heading = (
    <>
      Začněte získávat <span className="accent">více poptávek</span>
    </>
  ),
  sub = 'Vyplňte formulář a ozveme se vám do 24 hodin. Konzultace je zdarma a nezávazná.',
  submitLabel = 'Chci více poptávek',
  questions = REKLAMA_QUESTIONS,
}: LeadFormProps = {}) {
  const router = useRouter()
  const ui = FUNNEL_UI[locale]
  const [data, setData] = useState<FormData>({ ...EMPTY, phonePrefix: ui.prefix })
  const [errors, setErrors] = useState<FormErrors>({})
  const [revealed, setRevealed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendError, setSendError] = useState(false)
  const partialSent = useRef(false)
  const leadSource = useRef(source)
  const [qNeed, qBudget] = questions
  const pixelParams = contentCategory ? { content_category: contentCategory } : {}

  const setField = <K extends keyof FormData>(key: K, val: FormData[K]) => {
    setData((d) => ({ ...d, [key]: val }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleLastName = (v: string) => {
    setField('lastName', v)
    if (v.length > 0 && !revealed) setRevealed(true)
  }

  // Partial capture — once a valid email + name exist, fire a best-effort lead
  // so an abandoned form still reaches the inbox (keepalive survives unload).
  const handleEmailBlur = useCallback(() => {
    if (isValidEmail(data.email) && !partialSent.current) {
      partialSent.current = true
      fetch('/api/formular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: `${data.firstName} ${data.lastName}`.trim() || data.email,
          phonePrefix: data.phonePrefix,
          partial: true,
          source: leadSource.current,
          service,
        }),
        keepalive: true,
      }).catch(() => {})
    }
  }, [data.email, data.firstName, data.lastName, data.phonePrefix, service])

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!isValidEmail(data.email)) e.email = ui.form.errEmail
    if (!data.firstName.trim()) e.firstName = ui.form.errFirst
    if (!data.lastName.trim()) e.lastName = ui.form.errLast
    if (!isValidPhone(data.phonePrefix, data.phone)) e.phone = ui.form.errPhone
    if (!data.websiteType) e.websiteType = qNeed.error
    if (!data.budget) e.budget = qBudget.error
    return e
  }

  const handleSubmit = async () => {
    if (submitting) return
    // First click reveals the rest of the form; errors are shown right away
    // and the visitor is taken to the first field that needs attention.
    if (!revealed) setRevealed(true)
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      const order: (keyof FormData)[] = ['email', 'firstName', 'lastName', 'phone', 'websiteType', 'budget']
      const first = order.find((k) => errs[k])
      const target: Record<string, string> = {
        email: 'lf-email',
        firstName: 'lf-first',
        lastName: 'lf-last',
        phone: 'lf-phone',
        websiteType: 'lf-q1',
        budget: 'lf-q2',
      }
      // wait for the reveal animation to lay the fields out
      setTimeout(() => {
        const el = first && document.getElementById(target[first])
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        if (el instanceof HTMLInputElement) el.focus({ preventScroll: true })
      }, revealed ? 0 : 480)
      return
    }
    setSubmitting(true)
    setSendError(false)
    const name = `${data.firstName} ${data.lastName}`.trim()
    const payload = JSON.stringify({
      ...data,
      name,
      source: leadSource.current,
      service,
      locale,
      answers: [
        { label: qNeed.emailLabel, value: data.websiteType },
        { label: qBudget.emailLabel, value: data.budget },
      ],
    })

    // The lead must reach the inbox: retry once, and if it still fails tell
    // the visitor (with a phone fallback) instead of counting a conversion
    // for a lead nobody received.
    let delivered = false
    for (let attempt = 0; attempt < 2 && !delivered; attempt++) {
      try {
        const res = await fetch('/api/formular', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
        })
        delivered = res.ok
      } catch {
        /* network error: retry */
      }
    }
    if (!delivered) {
      setSendError(true)
      setSubmitting(false)
      return
    }

    try {
      const eventId = crypto.randomUUID()
      fbqTrack('Contact', pixelParams, eventId)
      fetch('/api/meta-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Contact',
          event_id: eventId,
          event_source_url: window.location.href,
          email: data.email,
          phone: `${data.phonePrefix}${data.phone}`,
          first_name: data.firstName || undefined,
          last_name: data.lastName || undefined,
          fbp: getFbp(),
          fbc: getFbc(),
          content_category: contentCategory,
        }),
        keepalive: true,
      }).catch(() => {})

      const leadEventId = crypto.randomUUID()
      sessionStorage.setItem(
        'nsh_lead_event',
        JSON.stringify({
          event_id: leadEventId,
          email: data.email,
          phone: `${data.phonePrefix}${data.phone}`,
          first_name: data.firstName || undefined,
          last_name: data.lastName || undefined,
          fbp: getFbp(),
          fbc: getFbc(),
          content_category: contentCategory,
        })
      )
    } catch {
      /* best-effort */
    }

    // Keep the button disabled until the thank-you page replaces this one,
    // so a slow navigation can't trigger a second lead / conversion.
    router.push(redirectTo)
  }

  return (
    <section id="konzultace" className="lf">
      <div className="container lf-grid">
        {/* Left — pitch + trust */}
        <div className="lf-intro reveal">
          <span className="lf-live">
            <span className="lf-live-dot" aria-hidden="true" />
            {liveBadge}
          </span>
          <h2 className="lf-heading">{heading}</h2>
          <p className="lf-sub">{sub}</p>
          <div className="lf-proof">
            <div className="lf-avatars">
              {AVATARS.map(({ src, alt }) => (
                <Image key={src} src={src} alt={alt} width={36} height={36} className="lf-avatar" loading="lazy" />
              ))}
            </div>
            <span className="lf-proof-text">
              <strong>{ui.form.proof[0]}</strong> {ui.form.proof[1]}
            </span>
          </div>
        </div>

        {/* Right — form */}
        <div className="lf-form reveal" style={{ '--d': '0.12s' } as CSSProperties}>
          <div className="lf-field">
            <label htmlFor="lf-email">{ui.form.email}</label>
            <input
              id="lf-email"
              type="email"
              value={data.email}
              onChange={(e) => setField('email', e.target.value)}
              onBlur={handleEmailBlur}
              placeholder={ui.form.emailPh}
              autoComplete="email"
              className={`lf-input${errors.email ? ' err' : ''}`}
            />
            {errors.email && <p className="lf-error">{errors.email}</p>}
          </div>

          <div className="lf-row2">
            <div className="lf-field">
              <label htmlFor="lf-first">{ui.form.firstName}</label>
              <input
                id="lf-first"
                type="text"
                value={data.firstName}
                onChange={(e) => setField('firstName', e.target.value)}
                placeholder={ui.form.firstNamePh}
                autoComplete="given-name"
                className={`lf-input${errors.firstName ? ' err' : ''}`}
              />
              {errors.firstName && <p className="lf-error">{errors.firstName}</p>}
            </div>
            <div className="lf-field">
              <label htmlFor="lf-last">{ui.form.lastName}</label>
              <input
                id="lf-last"
                type="text"
                value={data.lastName}
                onChange={(e) => handleLastName(e.target.value)}
                placeholder={ui.form.lastNamePh}
                autoComplete="family-name"
                className={`lf-input${errors.lastName ? ' err' : ''}`}
              />
              {errors.lastName && <p className="lf-error">{errors.lastName}</p>}
            </div>
          </div>

          {/* Progressive reveal */}
          <div className={`lf-reveal${revealed ? ' open' : ''}`} aria-hidden={!revealed}>
            <div className="lf-reveal-inner">
              <div className="lf-field">
                <label htmlFor="lf-phone">{ui.form.phone}</label>
                <div className={`lf-phone${errors.phone ? ' err' : ''}`}>
                  <select
                    aria-label={ui.form.prefixAria}
                    className="lf-prefix"
                    value={data.phonePrefix}
                    onChange={(e) => setField('phonePrefix', e.target.value)}
                    tabIndex={revealed ? 0 : -1}
                  >
                    {PHONE_COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <span className="lf-phone-sep" aria-hidden="true" />
                  <input
                    id="lf-phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    placeholder={ui.form.phonePh}
                    autoComplete="tel-national"
                    tabIndex={revealed ? 0 : -1}
                    className="lf-phone-input"
                  />
                </div>
                {errors.phone && <p className="lf-error">{errors.phone}</p>}
              </div>

              <div className="lf-field" id="lf-q1">
                <p className="lf-qlabel">{qNeed.label}</p>
                <div className="lf-opts">
                  {qNeed.options.map((opt, i) => (
                    <OptionBtn
                      key={opt}
                      label={opt}
                      letter={OPTION_LETTERS[i]}
                      selected={data.websiteType === opt}
                      onClick={() => setField('websiteType', opt)}
                    />
                  ))}
                </div>
                {errors.websiteType && <p className="lf-error">{errors.websiteType}</p>}
              </div>

              <div className="lf-field" id="lf-q2">
                <p className="lf-qlabel">{qBudget.label}</p>
                <div className="lf-opts">
                  {qBudget.options.map((opt, i) => (
                    <OptionBtn
                      key={opt}
                      label={opt}
                      letter={OPTION_LETTERS[i]}
                      selected={data.budget === opt}
                      onClick={() => setField('budget', opt)}
                    />
                  ))}
                </div>
                {errors.budget && <p className="lf-error">{errors.budget}</p>}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="btn btn-primary lf-submit"
          >
            {submitting ? (
              <>
                <span className="lf-spinner" aria-hidden="true" />
                {ui.form.sending}
              </>
            ) : (
              <>
                {submitLabel}
                <ArrowRight size={10} />
              </>
            )}
          </button>
          {sendError && (
            <p className="lf-error lf-send-error" role="alert">
              {ui.form.errSend}
            </p>
          )}
          <p className="lf-gdpr">
            {ui.form.consent} <a href={gdprHref(locale)}>{ui.form.privacyLink}</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
