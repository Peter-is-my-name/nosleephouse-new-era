import type { CaseSlug } from '@/lib/routes'

/**
 * Locale-independent presentation details for each case study: the hero
 * artwork, the outbound "live" link and which project the page hands off to.
 * All copy comes from `src/lib/content/cases.ts`.
 */
export type CaseLayout = {
  heroImg: string
  heroPos: string
  liveUrl: string
  /** picks the wording of the outbound link */
  liveKind: 'site' | 'instagram'
  /** avatar for the testimonial block; omit when the study has no testimonial */
  testimonialAvatar?: string
  next: CaseSlug
}

export const CASE_LAYOUT: Record<CaseSlug, CaseLayout> = {
  'reality-expo': {
    heroImg: '/assets/reklama/reality-expo-event.webp',
    heroPos: 'center 35%',
    liveUrl: 'https://realityexpo.sk',
    liveKind: 'site',
    testimonialAvatar: '/assets/testimonials/jakub.jpg',
    next: 'aparsia',
  },
  aparsia: {
    heroImg: '/assets/reklama/aparsia.png',
    heroPos: 'center 30%',
    liveUrl: 'https://aparsia.cz',
    liveKind: 'site',
    testimonialAvatar: '/assets/testimonials/dominika.jpg',
    next: 'reality-expo',
  },
  duopet: {
    heroImg: '/assets/reklama/duopetcz.jpeg',
    heroPos: 'center 32%',
    liveUrl: 'https://duopet.cz',
    liveKind: 'site',
    testimonialAvatar: '/assets/testimonials/radek.jpg',
    next: 'reality-expo',
  },
  'jun-matcha': {
    heroImg: '/assets/reklama/junmatcha.png',
    heroPos: 'center 35%',
    liveUrl: 'https://www.instagram.com/junmatchabar',
    liveKind: 'instagram',
    next: 'duopet',
  },
}
