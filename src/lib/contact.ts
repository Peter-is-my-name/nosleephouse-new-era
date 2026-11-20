import type { Locale } from './i18n'

/** Martin's number shown as the main contact: Slovak number on .sk, Czech elsewhere. */
export const MARTIN_PHONE: Record<Locale, string> = {
  cs: '+420 734 565 323',
  sk: '+421 944 971 113',
  en: '+420 734 565 323',
}

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`
