import type { Metadata } from 'next'
import WebLanding from '@/components/funnel/pages/WebLanding'
import { getWebCopy } from '@/lib/funnel'
import { lpHref } from '@/lib/routes'
import { buildLandingMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildLandingMetadata('en', lpHref('en', 'adWeb'), getWebCopy('en').meta)

export default function Page() {
  return <WebLanding locale="en" />
}
