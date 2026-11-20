/**
 * Cookie consent state (shared by the cookie banner and the Meta Pixel).
 *
 * Stored in localStorage under `nsh-cookies`: either the legacy string
 * 'declined' or a JSON object with the chosen categories plus a timestamp and
 * a version, so we can show when and under which wording consent was given.
 * Without a stored choice there is NO consent (silence is not consent, GDPR
 * art. 4(11) + § 109 ods. 8 zákona č. 452/2021 Z. z.).
 */

export const CONSENT_KEY = 'nsh-cookies'
/** fired on window whenever the stored choice changes */
export const CONSENT_EVENT = 'nsh-consent-change'
/** fire on window to reopen the cookie settings (footer link) */
export const OPEN_SETTINGS_EVENT = 'nsh-open-cookies'
/** bump when the categories or the banner wording change materially */
export const CONSENT_VERSION = 2

export type ConsentPrefs = {
  necessary: true
  preferences: boolean
  statistics: boolean
  marketing: boolean
}

const NONE: ConsentPrefs = { necessary: true, preferences: false, statistics: false, marketing: false }

/** null = the visitor has not decided yet */
export function readConsent(): ConsentPrefs | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    if (raw === 'declined') return NONE
    const v = JSON.parse(raw) as Partial<ConsentPrefs>
    return {
      necessary: true,
      preferences: !!v.preferences,
      statistics: !!v.statistics,
      marketing: !!v.marketing,
    }
  } catch {
    return null
  }
}

export function writeConsent(prefs: Omit<ConsentPrefs, 'necessary'>) {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, ...prefs, v: CONSENT_VERSION, ts: new Date().toISOString() })
    )
  } catch {
    /* storage blocked: the choice simply is not remembered */
  }
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export const hasMarketingConsent = () => readConsent()?.marketing === true

export const openCookieSettings = () => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
