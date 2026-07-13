import Link from 'next/link'

export default function NotFound() {
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
        Tato stránka neexistuje.
      </p>
      <Link href="/" className="btn btn-primary">
        Zpět domů
      </Link>
    </main>
  )
}
