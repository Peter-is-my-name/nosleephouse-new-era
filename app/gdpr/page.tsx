import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GdprContent from '@/components/GdprContent'

export const metadata: Metadata = {
  title: 'Zásady ochrany osobných údajov',
  description:
    'Ako nosleephouse s.r.o. zhromažďuje, používa a chráni vaše osobné údaje v súlade s GDPR a zákonom č. 18/2018 Z. z.',
}

export default function GdprPage() {
  return (
    <>
      <Header />
      <main>
        <GdprContent />
      </main>
      <Footer />
    </>
  )
}
