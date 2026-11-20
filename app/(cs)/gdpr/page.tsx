import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GdprContent from '@/components/GdprContent'
import { gdprHref, pathsFor } from '@/lib/routes'
import { buildGdprMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildGdprMetadata('cs')

export default function GdprPage() {
  return (
    <>
      <Header locale="cs" alternates={pathsFor(gdprHref)} />
      <main>
        <GdprContent locale="cs" />
      </main>
      <Footer locale="cs" />
    </>
  )
}
