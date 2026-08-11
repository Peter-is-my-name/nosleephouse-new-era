import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { homeHref } from '@/lib/routes'

export default function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound

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
      <span
        style={{
          fontSize: 'clamp(96px, 14vw, 180px)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'var(--green)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        404
      </span>
      <p
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '18px',
          fontFamily: 'var(--font-hel)',
        }}
      >
        {t.text}
      </p>
      <Link href={homeHref(locale)} className="btn btn-primary">
        {t.cta}
      </Link>
    </main>
  )
}
