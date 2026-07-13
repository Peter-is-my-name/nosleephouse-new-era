'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
        Něco se pokazilo.
      </h2>
      <button onClick={reset} className="btn btn-primary">
        Zkusit znovu
      </button>
    </main>
  )
}
