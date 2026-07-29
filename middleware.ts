import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Temporary "hidden site" gate.
 *
 * While the main site is being reworked, only the live /reklama ad funnel
 * (and the infrastructure it depends on) stays public. Every other route
 * — the homepage, /projekty, case studies — is rewritten to /coming-soon.
 *
 * To bring the whole site back online later: delete this file (or empty
 * PUBLIC_PREFIXES back to allow everything). Nothing else needs to change.
 */

const PUBLIC_PREFIXES = [
  '/reklama',       // the ad landing page + /reklama/dotaznik-odeslany + /reklama/formular
  '/gdpr',          // linked from the /reklama form consent
  '/api',           // /api/formular + /api/meta-capi (form submit + Meta CAPI)
  '/coming-soon',   // the holding page itself (avoid a rewrite loop)
  '/_next',         // Next.js internals
];

function isPublic(pathname: string): boolean {
  if (PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return true;
  }
  // Static files (favicon.ico, robots.txt, sitemap.xml, /assets/*, icons, images …)
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

export function middleware(req: NextRequest) {
  // Never gate local development — the full site stays editable/previewable
  // on localhost. Only real (production) deployments are hidden.
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  if (isPublic(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = '/coming-soon';
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on everything except Next's internal asset pipeline.
  matcher: ['/((?!_next/).*)'],
};
