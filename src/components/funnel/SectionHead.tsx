import type { CSSProperties, ReactNode } from 'react'

/** Centered eyebrow pill + heading + optional lead, shared by funnel sections. */
export default function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div className={`fn-head${align === 'left' ? ' fn-head-left' : ''}`}>
      {eyebrow && (
        <span className="fn-eyebrow reveal">
          <span className="fn-eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="fn-heading reveal" style={{ '--d': '0.06s' } as CSSProperties}>
        {title}
      </h2>
      {lead && (
        <p className="fn-lead reveal" style={{ '--d': '0.12s' } as CSSProperties}>
          {lead}
        </p>
      )}
    </div>
  )
}
