import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { HTML_LANG, type Locale } from '@/lib/i18n'
import { buildSiteJsonLd } from '@/lib/siteMeta'

/**
 * Inter is loaded as a VARIABLE font: no `weight` array on purpose.
 *
 * Passing explicit weights makes next/font download one static instance per
 * weight × style at build time — ~10 files from fonts.gstatic.com, each an
 * opportunity for the build to fail if the CDN hiccups (which is exactly what
 * broke the Vercel deploy). The variable font is a single file per style and
 * covers the whole 100–900 axis, so `font-weight: 800` in CaseStudy.css now
 * renders at 800 instead of snapping back to 700.
 *
 * `latin-ext` is required, not optional: Czech diacritics (č ř š ž ě ů ť ď ň)
 * live in that subset, not in `latin`.
 *
 * Instrument Serif used to be loaded here as `--font-serif-loaded`. Nothing
 * ever consumed it — globals.css deliberately aliases `--font-serif` to Inter
 * ("secondary fonts turned off") — so it was fetched on every build and never
 * painted. To bring the serif accent back, re-add the `Instrument_Serif` import
 * here and point `--font-serif` at it in globals.css.
 */
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

/**
 * The <html>/<body> shell shared by both root layouts.
 *
 * The site uses one root layout per locale (see app/(cs) and app/(en)) so that
 * the `lang` attribute is correct in the server-rendered HTML rather than being
 * patched on the client.
 */
export default function RootHtml({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  return (
    <html
      lang={HTML_LANG[locale]}
      className={inter.variable}
      suppressHydrationWarning
    >
      <body>
        {children}
        {buildSiteJsonLd(locale).map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
      </body>
    </html>
  )
}
