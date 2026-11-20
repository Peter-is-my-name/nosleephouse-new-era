import type { Metadata } from 'next'
import ThankYou from '@/components/reklama/ThankYou'
import { getDictionary } from '@/lib/dictionaries'
import { getAutomationCopy } from '@/lib/funnel'
import { lpHref, lpThanksHref } from '@/lib/routes'
import { buildLandingMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildLandingMetadata('en', lpThanksHref('en', 'adAutomation'), {
  title: getDictionary('en').meta.thankYou.title,
  description: getAutomationCopy('en').meta.description,
})

/* Separate thank-you URL per funnel and locale → URL-based custom conversion in Meta. */
export default function ThankYouPage() {
  return <ThankYou locale="en" backHref={lpHref('en', 'adAutomation')} analysis />
}
