import type { Locale } from '../i18n'
import type { AutomationCopy, CreativesCopy, WebCopy } from './types'
import { webCs } from './web.cs'
import { webSk } from './web.sk'
import { webEn } from './web.en'
import { creativesCs } from './creatives.cs'
import { creativesSk } from './creatives.sk'
import { creativesEn } from './creatives.en'
import { automationCs } from './automation.cs'
import { automationSk } from './automation.sk'
import { automationEn } from './automation.en'

export type { AutomationCopy, CreativesCopy, WebCopy } from './types'

const WEB: Record<Locale, WebCopy> = { cs: webCs, sk: webSk, en: webEn }
const CREATIVES: Record<Locale, CreativesCopy> = { cs: creativesCs, sk: creativesSk, en: creativesEn }
const AUTOMATION: Record<Locale, AutomationCopy> = { cs: automationCs, sk: automationSk, en: automationEn }

export const getWebCopy = (l: Locale) => WEB[l]
export const getCreativesCopy = (l: Locale) => CREATIVES[l]
export const getAutomationCopy = (l: Locale) => AUTOMATION[l]

/** Meta `content_category` per funnel and locale (Contact / Lead events). */
export const contentCategory = (funnel: 'web' | 'ai-kreativy' | 'ai-automatizace', l: Locale) =>
  funnel === 'web' ? (l === 'cs' ? undefined : `web-${l}`) : l === 'cs' ? funnel : `${funnel}-${l}`

/** Human service name for the lead e-mail (also selects the auto-reply copy). */
export const SERVICE_NAME = {
  web: undefined,
  'ai-kreativy': 'AI kreativy',
  'ai-automatizace': 'AI automatizace',
} as const
