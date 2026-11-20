import type { Locale } from '@/lib/i18n'

/**
 * AI video portfolio shown on the AI creatives landing page. Files live in
 * public/assets/ai-kreativy (all 9:16, 720x1280, poster = same name .jpg).
 * The texts (format, hook, description) are localized in
 * src/lib/funnel/creatives.<locale>.ts, paired by array index.
 *
 * Honesty rule: brands we never worked for (Swappie, Subway) are marked as
 * demo and must never be presented as clients. No invented results.
 */
export type AiVideo = {
  file: string
  brand: string
  /** self-initiated demo work for a brand that is not our client */
  demo?: boolean
  /** a localized cut of the same ad (e.g. Slovak voiceover) */
  byLocale?: Partial<Record<Locale, string>>
}

const BASE = '/assets/ai-kreativy/'
const fileFor = (v: AiVideo, l: Locale) => v.byLocale?.[l] ?? v.file
export const src = (v: AiVideo, l: Locale) => `${BASE}${fileFor(v, l)}.mp4`
export const poster = (v: AiVideo, l: Locale) => `${BASE}${fileFor(v, l)}.jpg`

export const VIDEOS: AiVideo[] = [
  { file: 'deltaplus-reklama', brand: 'Delta Plus' },
  { file: 'deltaplus-slub', brand: 'Delta Plus' },
  { file: 'nosleephouse-reklama', brand: 'nosleephouse', byLocale: { sk: 'nosleephouse-reklama-sk' } },
  { file: 'noflex-rozhovor', brand: 'NOFLEX' },
  { file: 'noflex-pribeh', brand: 'NOFLEX' },
  { file: 'lomnica-lomnica-hotel-v3', brand: 'Hotel Lomnica *****' },
  { file: 'hrajko-reklama-dlha', brand: 'Hrajko' },
  { file: 'jabkolevne-reklama', brand: 'JabkoLevně.cz' },
  { file: 'swappie-reklama', brand: 'Swappie', demo: true },
  { file: 'subway-reklama', brand: 'Subway', demo: true },
  { file: 'belanske-reklama-1', brand: 'Belanské stavebniny' },
  { file: 'ladomer-mercedes', brand: 'Ladomer' },
]
