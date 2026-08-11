import type { ReactNode } from 'react'
import { Inter, Instrument_Serif } from 'next/font/google'
import { HTML_LANG, type Locale } from '@/lib/i18n'
import { buildSiteJsonLd } from '@/lib/siteMeta'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif-loaded',
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
      className={`${inter.variable} ${instrumentSerif.variable}`}
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
