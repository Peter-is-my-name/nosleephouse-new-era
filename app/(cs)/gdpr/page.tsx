import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GdprContent from '@/components/GdprContent'
import { gdprHref } from '@/lib/routes'
import { buildGdprMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildGdprMetadata('cs')

export default function GdprPage() {
  return (
    <>
      <Header locale="cs" altHref={gdprHref('en')} />
      <main>
        <GdprContent locale="cs" />
      </main>
      <Footer locale="cs" />
    </>
  )
}
