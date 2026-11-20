import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieDialog from './CookieDialog'
import RevealInit from './RevealInit'
import type { Locale } from '@/lib/i18n'
import type { LocalePaths } from '@/lib/routes'

/**
 * Header + footer + cookie banner chrome shared by every content page.
 * `alternates` is the same page in every locale and drives the language
 * switcher (hreflang comes from each page's metadata).
 */
export default function SiteShell({
  locale,
  alternates,
  mainId,
  children,
}: {
  locale: Locale
  alternates: LocalePaths
  mainId?: string
  children: ReactNode
}) {
  return (
    <>
      <Header locale={locale} alternates={alternates} />
      <main id={mainId}>{children}</main>
      <Footer locale={locale} />
      <CookieDialog locale={locale} />
      <RevealInit />
    </>
  )
}
