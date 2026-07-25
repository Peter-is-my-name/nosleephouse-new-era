import type { Metadata } from 'next'
import ThankYou from '@/components/reklama/ThankYou'

export const metadata: Metadata = {
  title: 'Děkujeme za poptávku — rezervujte si termín konzultace',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return <ThankYou />
}
