'use client'
import { useState, useRef, useCallback, type CSSProperties } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowRight } from '../icons'
import { fbqTrack, getFbp, getFbc } from '@/lib/metaPixel'
import './LeadForm.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = (v: string) => EMAIL_RE.test(v.trim())
const isValidPhone = (v: string) => /^\d{9}$/.test(v.replace(/\s+/g, ''))

const PHONE_COUNTRIES = [
  { code: '+420', flag: '🇨🇿', label: 'CZ' },
  { code: '+421', flag: '🇸🇰', label: 'SK' },
] as const

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

const AVATARS = [
  { src: '/assets/testimonials/jakub.jpg', alt: 'Jakub H.' },
  { src: '/assets/testimonials/radek.jpg', alt: 'Radek' },
  { src: '/assets/testimonials/dominika.jpg', alt: 'Dominika' },
  { src: '/assets/testimonials/filip.jpg', alt: 'Filip' },
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
      <span className="lf-opt-label">{label}</span>
      {selected && (
        <svg className="lf-opt-check" width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

export default function LeadForm() {
  const router = useRouter()
  const [data, setData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [revealed, setRevealed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const partialSent = useRef(false)
  const leadSource = useRef('reklama-inline-form')

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
        }),
        keepalive: true,
      }).catch(() => {})
    }
  }, [data.email, data.firstName, data.lastName, data.phonePrefix])

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!isValidEmail(data.email)) e.email = 'Zadejte platný e-mail.'
    if (!data.firstName.trim()) e.firstName = 'Vyplňte jméno.'
    if (!data.lastName.trim()) e.lastName = 'Vyplňte příjmení.'
    if (!isValidPhone(data.phone)) e.phone = 'Zadejte platné číslo (9 číslic).'
    if (!data.websiteType) e.websiteType = 'Vyberte typ webu.'
    if (!data.budget) e.budget = 'Vyberte rozpočet.'
    return e
  }

  const handleSubmit = async () => {
    if (!revealed) {
      setRevealed(true)
      return
    }
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    const name = `${data.firstName} ${data.lastName}`.trim()

    try {
      await fetch('/api/formular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, name, source: leadSource.current }),
      })
    } catch {
      /* best-effort */
    }

    try {
      const eventId = crypto.randomUUID()
      fbqTrack('Contact', {}, eventId)
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
        })
      )
    } catch {
      /* best-effort */
    }

    setSubmitting(false)
    router.push('/reklama/dotaznik-odeslany')
  }

  return (
    <section id="konzultace" className="lf">
      <div className="container lf-grid">
        {/* Left — pitch + trust */}
        <div className="lf-intro reveal">
          <span className="lf-live">
            <span className="lf-live-dot" aria-hidden="true" />
            Volná místa tento měsíc
          </span>
          <h2 className="lf-heading">
            Začněte získávat <span className="accent">více poptávek</span>
          </h2>
          <p className="lf-sub">
            Vyplňte formulář a ozveme se vám do 24 hodin. Konzultace je zdarma a nezávazná.
          </p>
          <div className="lf-proof">
            <div className="lf-avatars">
              {AVATARS.map(({ src, alt }) => (
                <Image key={src} src={src} alt={alt} width={36} height={36} className="lf-avatar" loading="lazy" />
              ))}
            </div>
            <span className="lf-proof-text">
              <strong>76+ klientů</strong> nám důvěřuje
            </span>
          </div>
        </div>

        {/* Right — form */}
        <div className="lf-form reveal" style={{ '--d': '0.12s' } as CSSProperties}>
          <div className="lf-field">
            <label htmlFor="lf-email">E-mail *</label>
            <input
              id="lf-email"
              type="email"
              value={data.email}
              onChange={(e) => setField('email', e.target.value)}
              onBlur={handleEmailBlur}
              placeholder="vas@email.cz"
              autoComplete="email"
              className={`lf-input${errors.email ? ' err' : ''}`}
            />
            {errors.email && <p className="lf-error">{errors.email}</p>}
          </div>

          <div className="lf-row2">
            <div className="lf-field">
              <label htmlFor="lf-first">Jméno *</label>
              <input
                id="lf-first"
                type="text"
                value={data.firstName}
                onChange={(e) => setField('firstName', e.target.value)}
                placeholder="Honza"
                autoComplete="given-name"
                className={`lf-input${errors.firstName ? ' err' : ''}`}
              />
              {errors.firstName && <p className="lf-error">{errors.firstName}</p>}
            </div>
            <div className="lf-field">
              <label htmlFor="lf-last">Příjmení *</label>
              <input
                id="lf-last"
                type="text"
                value={data.lastName}
                onChange={(e) => handleLastName(e.target.value)}
                placeholder="Novák"
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
                <label htmlFor="lf-phone">Telefon *</label>
                <div className={`lf-phone${errors.phone ? ' err' : ''}`}>
                  <select
                    aria-label="Předvolba"
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
                    placeholder="608 123 456"
                    autoComplete="tel-national"
                    tabIndex={revealed ? 0 : -1}
                    className="lf-phone-input"
                  />
                </div>
                {errors.phone && <p className="lf-error">{errors.phone}</p>}
              </div>

              <div className="lf-field">
                <p className="lf-qlabel">Jaký typ webu potřebujete? *</p>
                <div className="lf-opts">
                  {WEBSITE_OPTIONS.map((opt, i) => (
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

              <div className="lf-field">
                <p className="lf-qlabel">S jakým rozpočtem počítáte? *</p>
                <div className="lf-opts">
                  {BUDGET_OPTIONS.map((opt, i) => (
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
                Odesílám…
              </>
            ) : (
              <>
                Chceme více poptávek
                <ArrowRight size={10} />
              </>
            )}
          </button>
          <p className="lf-gdpr">
            Odesláním souhlasíte se zpracováním osobních údajů za účelem kontaktování.
          </p>
        </div>
      </div>
    </section>
  )
}
