/**
 * Meta Pixel helpers — shared by the /reklama funnel.
 *
 * The base Pixel is injected by <MetaPixel/> (landing layouts) only after
 * marketing-cookie consent; without it fbqTrack() is a no-op and only the
 * server-side CAPI event is sent.
 * These helpers fire events from the browser and read the Meta click/browser
 * cookies so the server-side Conversions API (/api/meta-capi) can be
 * deduplicated against the browser event via a shared eventID.
 */

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || '2270214106762719';

type FbqParams = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Track a standard Meta event. When an `eventId` is passed it is sent as
 * `{ eventID }`, which lets Meta merge this browser event with the matching
 * server-side CAPI event so the conversion is counted once.
 */
export function fbqTrack(event: string, params: FbqParams = {}, eventId?: string) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  if (eventId) {
    window.fbq('track', event, params, { eventID: eventId });
  } else {
    window.fbq('track', event, params);
  }
}

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}

/** Meta browser id cookie — improves CAPI match quality. */
export function getFbp(): string | undefined {
  return readCookie('_fbp');
}

/**
 * Meta click id (improves attribution of server-side conversions). Read from
 * the _fbc cookie when the Pixel runs (marketing consent); otherwise built in
 * memory from the ?fbclid= of the ad click, without storing anything.
 */
export function getFbc(): string | undefined {
  const cookie = readCookie('_fbc');
  if (cookie) return cookie;
  if (typeof window === 'undefined') return undefined;
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
}
