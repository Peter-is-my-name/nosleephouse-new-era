import type { Locale } from '../i18n'
import { cs, type Dictionary } from './cs'
import { en } from './en'

export type { Dictionary }

const DICTIONARIES: Record<Locale, Dictionary> = { cs, en }

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}
