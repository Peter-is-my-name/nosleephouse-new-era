import type { Metadata } from 'next'
import ThankYou2 from '@/components/ThankYou2'

export const metadata: Metadata = {
  title: 'Děkujeme za poptávku, rezervujte si termín konzultace',
  robots: { index: false, follow: false },
}

export default function ThankYou2Page() {
  return <ThankYou2 />
}
