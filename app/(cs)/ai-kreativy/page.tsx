import type { Metadata } from 'next'
import CreativesLanding from '@/components/funnel/pages/CreativesLanding'
import { getCreativesCopy } from '@/lib/funnel'
import { lpHref } from '@/lib/routes'
import { buildLandingMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildLandingMetadata('cs', lpHref('cs', 'adCreatives'), getCreativesCopy('cs').meta)

export default function Page() {
  return <CreativesLanding locale="cs" />
}
