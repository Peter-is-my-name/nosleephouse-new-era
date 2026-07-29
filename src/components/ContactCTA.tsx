'use client'
import { useState, useRef, useCallback, useEffect, type CSSProperties } from 'react';
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
  firstName: string
  lastName: string
  email: string
  phone: string
  phonePrefix: string
  message: string
}
type FormErrors = Partial<Record<keyof FormData, string>>

const EMPTY: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  phonePrefix: '+420',
  message: '',
}

export default function ContactCTA() {
  const router = useRouter()
  const [data, setData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [prefixOpen, setPrefixOpen] = useState(false)
  const partialSent = useRef(false)
  const prefixRef = useRef<HTMLDivElement>(null)

  const currentPrefix =
    PHONE_COUNTRIES.find((c) => c.code === data.phonePrefix) ?? PHONE_COUNTRIES[0]

  // Close the custom prefix dropdown on outside click / Escape.
  useEffect(() => {
    if (!prefixOpen) return
    const onDown = (e: MouseEvent) => {
      if (prefixRef.current && !prefixRef.current.contains(e.target as Node)) {
        setPrefixOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPrefixOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [prefixOpen])

  const setField = <K extends keyof FormData>(key: K, val: FormData[K]) => {
    setData((d) => ({ ...d, [key]: val }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  // Partial capture — once a valid email exists, fire a best-effort lead so an
  // abandoned form still reaches the inbox. No Meta tracking here.
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
    if (!data.firstName.trim()) e.firstName = 'Vyplňte jméno.'
    if (!data.lastName.trim()) e.lastName = 'Vyplňte příjmení.'
    if (!isValidEmail(data.email)) e.email = 'Zadejte platný e-mail.'
    if (!isValidPhone(data.phone)) e.phone = 'Zadejte platné číslo (9 číslic).'
    return e
  }

  const handleSubmit = async () => {
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
                  onChange={(e) => setField('lastName', e.target.value)}
                  placeholder="Novák"
                  autoComplete="family-name"
                  className={errors.lastName ? 'err' : undefined}
                />
                {errors.lastName && <p className="contact-error">{errors.lastName}</p>}
              </div>
            </div>

            <div className="contact-row2">
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
              <div className="field">
                <label htmlFor="cf-phone">Telefon *</label>
                <div className={`contact-phone${errors.phone ? ' err' : ''}`}>
                  <div className="contact-prefix" ref={prefixRef}>
                    <button
                      type="button"
                      className="contact-prefix-btn"
                      onClick={() => setPrefixOpen((o) => !o)}
                      aria-haspopup="listbox"
                      aria-expanded={prefixOpen}
                      aria-label={`Předvolba ${currentPrefix.code}`}
                    >
                      <span className="contact-prefix-flag">{currentPrefix.flag}</span>
                      <span className="contact-prefix-code">{currentPrefix.code}</span>
                      <svg
                        className={`contact-prefix-caret${prefixOpen ? ' open' : ''}`}
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1.5 5.5 6l4.5-4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {prefixOpen && (
                      <ul className="contact-prefix-menu" role="listbox">
                        {PHONE_COUNTRIES.map((c) => {
                          const active = c.code === data.phonePrefix
                          return (
                            <li key={c.code} role="option" aria-selected={active}>
                              <button
                                type="button"
                                className={`contact-prefix-opt${active ? ' selected' : ''}`}
                                onClick={() => {
                                  setField('phonePrefix', c.code)
                                  setPrefixOpen(false)
                                }}
                              >
                                <span className="contact-prefix-flag">{c.flag}</span>
                                <span className="contact-prefix-code">{c.code}</span>
                                <span className="contact-prefix-country">{c.label}</span>
                                {active && (
                                  <svg
                                    className="contact-prefix-check"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M20 6 9 17l-5-5"
                                      stroke="currentColor"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                  <span className="contact-phone-sep" aria-hidden="true" />
                  <input
                    id="cf-phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    placeholder="608 123 456"
                    autoComplete="tel-national"
                    className="contact-phone-input"
                  />
                </div>
                {errors.phone && <p className="contact-error">{errors.phone}</p>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="cf-msg" className="contact-msg-title">
                S čím vám můžeme pomoci?
              </label>
              <textarea
                id="cf-msg"
                rows={4}
                value={data.message}
                onChange={(e) => setField('message', e.target.value)}
                placeholder="Stačí pár vět o vašem projektu nebo cíli. Ozveme se do 24 hodin."
              />
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
                    <div className="founder-top">
                      <span className="founder-role">{f.role}</span>
                      <a className="founder-name" href={`mailto:${f.email}`}>
                        {f.name}
                      </a>
                    </div>
                    <div className="founder-bottom">
                      <span className="founder-reason">{f.reason}</span>
                      <a className="founder-contact" href={`tel:${f.phone.replace(/\s/g, '')}`}>
                        {f.phone}
                      </a>
                      <a className="founder-contact" href={`mailto:${f.email}`}>
                        {f.email}
                      </a>
                    </div>
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
