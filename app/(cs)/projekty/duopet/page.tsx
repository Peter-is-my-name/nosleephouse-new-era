import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import DuopetCase from '@/components/cases/DuopetCase'
import { caseHref } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('cs', 'duopet')

export default function DuopetPage() {
  return (
    <SiteShell locale="cs" altHref={caseHref('en', 'duopet')} mainId="top">
      <DuopetCase locale="cs" />
    </SiteShell>
  )
}
