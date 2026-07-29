'use client'
import { useState, useRef, useCallback, type CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, Logo } from './icons';
import './ContactCTA.css';

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

const FOUNDERS = [
  {
    photo: '/assets/contact/martin.jpg',
    role: 'Zakladatel & prodejce',
    name: 'Martin Bujňák',
    reason: 'Kvůli stavu projektu a dalších otázek:',
    phone: '+420 734 565 323',
    email: 'martin@nosleephouse.com',
  },
  {
    photo: '/assets/contact/peter.jpg',
    role: 'Zakladatel & grafický dizajnér',
    name: 'Peter Hronec',
    reason: 'Kvůli grafickýmu dizajnu:',
    phone: '+421 948 332 118',
    email: 'peter.hronec@nosleephouse.com',
  },
]

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
      className={`contact-opt${selected ? ' selected' : ''}`}
      aria-pressed={selected}
    >
      <span className="contact-opt-letter">{letter}</span>
      <span className="contact-opt-label">{label}</span>
      {selected && (
        <svg className="contact-opt-check" width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

export default function ContactCTA() {
  const router = useRouter()
  const [data, setData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [revealed, setRevealed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const partialSent = useRef(false)

  const setField = <K extends keyof FormData>(key: K, val: FormData[K]) => {
    setData((d) => ({ ...d, [key]: val }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const handleLastName = (v: string) => {
    setField('lastName', v)
    if (v.length > 0 && !revealed) setRevealed(true)
  }

  // Partial capture — once a valid email + name exist, fire a best-effort lead
  // so an abandoned form still reaches the inbox. No Meta tracking here.
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
          source: 'homepage-contact',
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

    // Lead email only — no Meta Pixel/CAPI (conversions are tracked on /reklama).
    try {
      await fetch('/api/formular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, name, source: 'homepage-contact' }),
      })
    } catch {
      /* best-effort */
    }

    setSubmitting(false)
    router.push('/dotaznik-odeslany-2')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-head reveal">
          <h2 className="contact-heading">
            Začněte získávat
            <br />
            <span className="accent">více poptávek</span>
          </h2>
          <span className="contact-logo">
            <Logo height={54} />
          </span>
        </div>

        <div className="contact-grid">
          <div className="contact-form reveal" style={{ '--d': '0.1s' } as CSSProperties}>
            <div className="field">
              <label htmlFor="cf-email">E-mail *</label>
              <input
                id="cf-email"
                type="email"
                value={data.email}
                onChange={(e) => setField('email', e.target.value)}
                onBlur={handleEmailBlur}
                placeholder="vas@email.cz"
                autoComplete="email"
                className={errors.email ? 'err' : undefined}
              />
              {errors.email && <p className="contact-error">{errors.email}</p>}
            </div>

            <div className="contact-row2">
              <div className="field">
                <label htmlFor="cf-first">Jméno *</label>
                <input
                  id="cf-first"
                  type="text"
                  value={data.firstName}
                  onChange={(e) => setField('firstName', e.target.value)}
                  placeholder="Honza"
                  autoComplete="given-name"
                  className={errors.firstName ? 'err' : undefined}
                />
                {errors.firstName && <p className="contact-error">{errors.firstName}</p>}
              </div>
              <div className="field">
                <label htmlFor="cf-last">Příjmení *</label>
                <input
                  id="cf-last"
                  type="text"
                  value={data.lastName}
                  onChange={(e) => handleLastName(e.target.value)}
                  placeholder="Novák"
                  autoComplete="family-name"
                  className={errors.lastName ? 'err' : undefined}
                />
                {errors.lastName && <p className="contact-error">{errors.lastName}</p>}
              </div>
            </div>

            {/* Progressive reveal */}
            <div className={`contact-reveal${revealed ? ' open' : ''}`} aria-hidden={!revealed}>
              <div className="contact-reveal-inner">
                <div className="field">
                  <label htmlFor="cf-phone">Telefon *</label>
                  <div className={`contact-phone${errors.phone ? ' err' : ''}`}>
                    <select
                      aria-label="Předvolba"
                      className="contact-prefix"
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
                    <span className="contact-phone-sep" aria-hidden="true" />
                    <input
                      id="cf-phone"
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                      placeholder="608 123 456"
                      autoComplete="tel-national"
                      tabIndex={revealed ? 0 : -1}
                      className="contact-phone-input"
                    />
                  </div>
                  {errors.phone && <p className="contact-error">{errors.phone}</p>}
                </div>

                <div className="field">
                  <p className="contact-qlabel">Jaký typ webu potřebujete? *</p>
                  <div className="contact-opts">
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
                  {errors.websiteType && <p className="contact-error">{errors.websiteType}</p>}
                </div>

                <div className="field">
                  <p className="contact-qlabel">S jakým rozpočtem počítáte? *</p>
                  <div className="contact-opts">
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
                  {errors.budget && <p className="contact-error">{errors.budget}</p>}
                </div>
              </div>
            </div>

            <p className="gdpr">
              Odesláním souhlasíte se zpracováním osobních údajů za účelem kontaktování.
            </p>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="btn btn-primary contact-submit"
            >
              {submitting ? (
                <>
                  <span className="contact-spinner" aria-hidden="true" />
                  Odesílám…
                </>
              ) : (
                <>
                  Chci více poptávek
                  <ArrowRight size={10} />
                </>
              )}
            </button>
          </div>

          <div className="contact-side reveal" style={{ '--d': '0.2s' } as CSSProperties}>
            <p className="contact-side-title">Spěchá to? Volejte nebo pište.</p>
            <div className="founders">
              {FOUNDERS.map((f) => (
                <div className="founder" key={f.name}>
                  <Image className="founder-photo" src={f.photo} alt={f.name} width={210} height={245} loading="lazy" />
                  <div className="founder-info">
                    <span className="founder-role">{f.role}</span>
                    <a className="founder-name" href={`mailto:${f.email}`}>
                      {f.name}
                    </a>
                    <span className="founder-reason">{f.reason}</span>
                    <a className="founder-contact" href={`tel:${f.phone.replace(/\s/g, '')}`}>
                      {f.phone}
                    </a>
                    <a className="founder-contact" href={`mailto:${f.email}`}>
                      {f.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
