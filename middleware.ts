import { NextResponse, type NextRequest } from 'next/server'
import { DOMAIN_LOCALE, SITE_URLS, isLocale, type Locale } from '@/lib/i18n'
import { TREE_PREFIX } from '@/lib/routes'

/**
 * Domain-based locale routing.
 *
 *   www.nosleephouse.cz/projekty   → app/(cs)/projekty          (no rewrite)
 *   www.nosleephouse.sk/projekty   → app/(sk)/sk/projekty       (rewrite)
 *   www.nosleephouse.com/projects  → app/(en)/en/projects       (rewrite)
 *
 * An explicit locale prefix (`/cs/...`, `/sk/...`, `/en/...`) is what the
 * language switcher links to, and what old URLs like nosleephouse.cz/en/...
 * look like. On a production domain it 308-redirects to the clean URL on that
 * locale's own domain. On localhost / *.vercel.app (no fixed locale) it stores
 * the locale in a cookie instead, so the whole site can be previewed in any
 * language without touching DNS.
 */

const COOKIE = 'nsh_locale'

/** Dev hosts with a fixed locale: http://sk.localhost:3000, en.localhost, cs.localhost */
const DEV_HOST = /^(cs|sk|en)\.localhost$/

function domainLocale(host: string | null): Locale | null {
  if (!host) return null
  const bare = host.split(':')[0].toLowerCase().replace(/^www\./, '')
  const dev = bare.match(DEV_HOST)
  if (dev) return dev[1] as Locale
  return DOMAIN_LOCALE[bare] ?? null
}

/** Origin serving `target` from the current request (dev subdomains stay local). */
function originFor(target: Locale, req: NextRequest): string {
  const host = (req.headers.get('host') ?? '').toLowerCase()
  const [name, port] = host.split(':')
  if (DEV_HOST.test(name)) return `${req.nextUrl.protocol}//${target}.localhost${port ? `:${port}` : ''}`
  return SITE_URLS[target]
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const fixed = domainLocale(req.headers.get('host'))

  // 1) explicit /cs | /sk | /en prefix
  const m = pathname.match(/^\/(cs|sk|en)(\/.*)?$/)
  if (m) {
    const target = m[1] as Locale
    const rest = (m[2] || '/') + search
    if (fixed) {
      const base = originFor(target, req)
      return NextResponse.redirect(new URL(rest, base), 308)
    }
    const res = NextResponse.redirect(new URL(rest, req.url), 307)
    res.cookies.set(COOKIE, target, { path: '/', sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 })
    return res
  }

  // 2) which locale serves this request
  const cookie = req.cookies.get(COOKIE)?.value ?? ''
  const locale: Locale = fixed ?? (isLocale(cookie) ? cookie : 'cs')
  if (locale === 'cs') return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = `${TREE_PREFIX[locale]}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Everything except Next internals, the API, and static files. sitemap.xml
  // IS routed (each locale has its own); robots.txt is not (one host-aware file).
  matcher: [
    '/((?!_next/|api/|assets/|.*\\.(?:png|jpe?g|webp|gif|svg|ico|mp4|webm|txt|woff2?|css|js|map|pdf)$).*)',
  ],
}
