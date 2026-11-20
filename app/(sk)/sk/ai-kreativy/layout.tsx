import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import MetaPixel from '@/components/MetaPixel'

export const metadata: Metadata = {
  // Paid-traffic landing pages must not compete with the organic site.
  robots: { index: false, follow: false },
}

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MetaPixel locale="sk" />
      {children}
    </>
  )
}
