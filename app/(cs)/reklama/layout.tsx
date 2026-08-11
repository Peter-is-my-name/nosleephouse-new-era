import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import MetaPixel from '@/components/MetaPixel'

export const metadata: Metadata = {
  // Ad landing pages shouldn't compete with the main site in organic search.
  robots: { index: false, follow: false },
}

export default function ReklamaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MetaPixel />
      {children}
    </>
  )
}
