import type { Locale } from '../i18n'
import { cs, type Dictionary } from './cs'
import { en } from './en'
import { sk } from './sk'

export type { Dictionary }

const DICTIONARIES: Record<Locale, Dictionary> = { cs, sk, en }

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}
