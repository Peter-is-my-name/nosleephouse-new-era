/**
 * Phone prefixes offered by the lead forms. CZ and SK first (the main
 * markets), then neighbours and the biggest English-speaking markets so
 * visitors of the .com site can submit too.
 */
export const PHONE_COUNTRIES = [
  { code: '+420', flag: '🇨🇿', label: 'CZ' },
  { code: '+421', flag: '🇸🇰', label: 'SK' },
  { code: '+43', flag: '🇦🇹', label: 'AT' },
  { code: '+49', flag: '🇩🇪', label: 'DE' },
  { code: '+48', flag: '🇵🇱', label: 'PL' },
  { code: '+36', flag: '🇭🇺', label: 'HU' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+1', flag: '🇺🇸', label: 'US' },
] as const

/** CZ/SK numbers have exactly 9 digits; elsewhere accept 6 to 14 digits. */
export function isValidPhone(prefix: string, value: string): boolean {
  const digits = value.replace(/[\s\-()/]+/g, '')
  if (!/^\d+$/.test(digits)) return false
  if (prefix === '+420' || prefix === '+421') return digits.length === 9
  return digits.length >= 6 && digits.length <= 14
}
