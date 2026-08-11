import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieDialog from './CookieDialog'
import RevealInit from './RevealInit'
import type { Locale } from '@/lib/i18n'

/**
 * Header + footer + cookie banner chrome shared by every content page.
 * `altHref` is the same page in the other locale and drives both the language
 * switcher and (via each page's metadata) the hreflang annotations.
 */
export default function SiteShell({
  locale,
  altHref,
  mainId,
  children,
}: {
  locale: Locale
  altHref: string
  mainId?: string
  children: ReactNode
}) {
  return (
    <>
      <Header locale={locale} altHref={altHref} />
      <main id={mainId}>{children}</main>
      <Footer locale={locale} />
      <CookieDialog locale={locale} />
      <RevealInit />
    </>
  )
}
