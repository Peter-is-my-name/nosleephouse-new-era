'use client'
import type { Locale } from '@/lib/i18n'
import { openCookieSettings } from '@/lib/consent'

const LABEL: Record<Locale, string> = { cs: 'Nastavení cookies', sk: 'Nastavenia cookies', en: 'Cookie settings' }

/** Footer link that reopens the cookie settings (consent can be changed or withdrawn any time). */
export default function CookieSettingsLink({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <button type="button" className={`cookie-settings-link${className ? ` ${className}` : ''}`} onClick={openCookieSettings}>
      {LABEL[locale]}
    </button>
  )
}
