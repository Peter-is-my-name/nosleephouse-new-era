import { Logo } from '../icons'
import './ReklamaFooter.css'

import type { Locale } from '@/lib/i18n'
import { FUNNEL_UI } from '@/lib/funnel/ui'
import { gdprHref } from '@/lib/routes'
import CookieSettingsLink from '../CookieSettingsLink'

export default function ReklamaFooter({ locale = 'cs' }: { locale?: Locale } = {}) {
  const ui = FUNNEL_UI[locale].footer
  return (
    <footer className="rk-footer">
      <div className="container rk-footer-inner">
        <div className="rk-footer-brand">
          <Logo height={30} />
          <span className="rk-footer-made">
            {ui.madeBy} <strong>nosleephouse™</strong>
          </span>
        </div>
        <div className="rk-footer-links">
          <a href={gdprHref(locale)}>GDPR</a>
          <span className="rk-footer-dot" aria-hidden="true">·</span>
          <CookieSettingsLink locale={locale} />
          <span className="rk-footer-dot" aria-hidden="true">·</span>
          <a href="mailto:info@nosleephouse.com">info@nosleephouse.com</a>
        </div>
      </div>
    </footer>
  )
}
