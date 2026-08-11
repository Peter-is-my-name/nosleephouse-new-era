import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import JunMatchaCase from '@/components/cases/JunMatchaCase'
import { caseHref } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('en', 'jun-matcha')

export default function JunMatchaPage() {
  return (
    <SiteShell locale="en" altHref={caseHref('cs', 'jun-matcha')} mainId="top">
      <JunMatchaCase locale="en" />
    </SiteShell>
  )
}
