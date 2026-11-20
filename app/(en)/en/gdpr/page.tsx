import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GdprContent from '@/components/GdprContent'
import { gdprHref, pathsFor } from '@/lib/routes'
import { buildGdprMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildGdprMetadata('en')

export default function GdprPage() {
  return (
    <>
      <Header locale="en" alternates={pathsFor(gdprHref)} />
      <main>
        <GdprContent locale="en" />
      </main>
      <Footer locale="en" />
    </>
  )
}
