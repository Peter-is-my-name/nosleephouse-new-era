import type { Metadata } from 'next'
import ThankYou2 from '@/components/ThankYou2'
import { getDictionary } from '@/lib/dictionaries'

export const metadata: Metadata = {
  title: getDictionary('en').meta.thankYou.title,
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return <ThankYou2 locale="en" />
}
