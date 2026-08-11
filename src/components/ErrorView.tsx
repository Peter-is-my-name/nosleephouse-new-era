'use client'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'

export default function ErrorView({ locale, reset }: { locale: Locale; reset: () => void }) {
  const t = getDictionary(locale).error

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '24px',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          color: 'var(--white)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {t.heading}
      </h2>
      <button onClick={reset} className="btn btn-primary">
        {t.cta}
      </button>
    </main>
  )
}
