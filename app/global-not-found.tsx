import type { Metadata } from 'next'
import { cookies, headers } from 'next/headers'
import RootHtml from '@/components/RootHtml'
import NotFoundView from '@/components/NotFoundView'
import { getDictionary } from '@/lib/dictionaries'
import { DOMAIN_LOCALE, isLocale, type Locale } from '@/lib/i18n'
import './globals.css'

/**
 * The site has one root layout per locale, so Next can't pick a layout for an
 * unmatched URL and would answer with a bare, unbranded 404. This global page
 * renders the branded not-found screen in the language of the domain (or of
 * the dev host / locale cookie), with a real 404 status.
 */
async function requestLocale(): Promise<Locale> {
  const host = ((await headers()).get('host') ?? '').split(':')[0].toLowerCase().replace(/^www\./, '')
  const dev = host.match(/^(cs|sk|en)\.localhost$/)
  if (dev) return dev[1] as Locale
  if (DOMAIN_LOCALE[host]) return DOMAIN_LOCALE[host]
  const cookie = (await cookies()).get('nsh_locale')?.value ?? ''
  return isLocale(cookie) ? cookie : 'cs'
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await requestLocale()
  return {
    title: `404 | ${getDictionary(locale).notFound.text}`,
    robots: { index: false, follow: false },
  }
}

export default async function GlobalNotFound() {
  const locale = await requestLocale()
  return (
    <RootHtml locale={locale}>
      <NotFoundView locale={locale} />
    </RootHtml>
  )
}
