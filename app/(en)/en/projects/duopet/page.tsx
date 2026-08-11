import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import DuopetCase from '@/components/cases/DuopetCase'
import { caseHref } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('en', 'duopet')

export default function DuopetPage() {
  return (
    <SiteShell locale="en" altHref={caseHref('cs', 'duopet')} mainId="top">
      <DuopetCase locale="en" />
    </SiteShell>
  )
}
