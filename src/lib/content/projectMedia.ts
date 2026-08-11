/**
 * Locale-independent media + metadata for each case study, shared by the
 * homepage portfolio grid, the projects listing and the "next project" card at
 * the bottom of every case study. Titles and brands live in the UI dictionary.
 */

import type { CaseSlug } from '../routes'

export type ProjectMedia = {
  /** card image used across listings and the next-project card */
  img: string
  year: string
  /** object-position on the homepage portfolio card */
  cardPos?: string
  /** object-position on the next-project card at the end of a case study */
  nextPos?: string
}

export const PROJECT_MEDIA: Record<CaseSlug, ProjectMedia> = {
  'reality-expo': {
    img: '/assets/reklama/why-4.jpg',
    year: '2025',
    cardPos: 'center 60%',
    nextPos: 'center 35%',
  },
  aparsia: {
    img: '/assets/reklama/aparsia.png',
    year: '2025',
  },
  duopet: {
    img: '/assets/reklama/duopetcz.jpeg',
    year: '2024',
    nextPos: 'center 32%',
  },
  'jun-matcha': {
    img: '/assets/reklama/junmatcha.png',
    year: '2025',
  },
}
