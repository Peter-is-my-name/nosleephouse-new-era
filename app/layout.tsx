import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif-loaded',
  display: 'swap',
})

const SITE_URL = 'https://nosleephouse.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'nosleephouse™ — Digitální agentura',
    template: '%s | nosleephouse™',
  },
  description:
    'Digitální agentura na nejvyšší úrovni. Vlastní kód, unikátní design, AI řešení a branding. Spouštíme za 7 dní.',
  // Favicon + Apple icon come from the file conventions app/icon.svg and
  // app/apple-icon.png (same setup as the old site). The brand logo PNG lives
  // at /icon-nsh.png.
  verification: {
    // Meta (Facebook) Business domain verification — renders
    // <meta name="facebook-domain-verification" ...> in <head> on every page.
    other: {
      'facebook-domain-verification': 'jh93n908qqyjbbiaar4802u66z6a5x',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: SITE_URL,
    siteName: 'nosleephouse™',
    title: 'nosleephouse™ — Digitální agentura',
    description:
      'Digitální agentura na nejvyšší úrovni. Vlastní kód, unikátní design, AI řešení a branding. Spouštíme za 7 dní.',
    images: [
      {
        url: '/assets/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'nosleephouse™ — Tým na veletrhu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nosleephouse™ — Digitální agentura',
    description:
      'Digitální agentura na nejvyšší úrovni. Vlastní kód, unikátní design, AI řešení a branding.',
    images: ['/assets/hero.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  )
}
