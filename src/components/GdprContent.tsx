import type { Locale } from '@/lib/i18n'
import { getGdprContent } from '@/lib/content/gdpr'
import { rich } from '@/lib/rich'
import { homeHref } from '@/lib/routes'
import './Gdpr.css'

export default function GdprContent({ locale }: { locale: Locale }) {
  const t = getGdprContent(locale)
  const year = new Date().getFullYear()

  return (
    <section className="gdpr">
      <div className="container gdpr-inner">
        <header className="gdpr-head">
          <span className="gdpr-eyebrow">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5 2.5 4v4.5c0 3 2.4 5.8 5.5 6.5 3.1-.7 5.5-3.5 5.5-6.5V4L8 1.5z" stroke="var(--green)" strokeWidth="1.4" />
              <path d="m5.5 8.5 2 1.8 3-3.6" stroke="var(--green)" strokeWidth="1.5" />
            </svg>
            {t.eyebrow}
          </span>
          <h1 className="gdpr-title">{rich(t.title)}</h1>
          <p className="gdpr-date">{t.effectiveDate}</p>
        </header>

        <div className="gdpr-sections">
          {t.sections.map((s) => (
            <article className="gdpr-section" key={s.heading}>
              <h2 className="gdpr-section-heading">{s.heading}</h2>
              {s.body && <p className="gdpr-body">{s.body}</p>}
              {s.list && (
                <ul className="gdpr-list">
                  {s.list.map((item) => (
                    <li key={item}>
                      <span className="gdpr-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {s.outro && <p className="gdpr-body">{s.outro}</p>}
            </article>
          ))}
        </div>

        <div className="gdpr-foot">
          <p>© {year} nosleephouse s.r.o. · IČO: 57 202 443</p>
          <a href={homeHref(locale)} className="gdpr-back">{t.back}</a>
        </div>
      </div>
    </section>
  )
}
