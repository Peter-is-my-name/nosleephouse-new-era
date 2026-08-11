import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import JunMatchaCase from '@/components/cases/JunMatchaCase'
import { caseHref } from '@/lib/routes'
import { buildCaseMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildCaseMetadata('cs', 'jun-matcha')

export default function JunMatchaPage() {
  return (
    <SiteShell locale="cs" altHref={caseHref('en', 'jun-matcha')} mainId="top">
      <JunMatchaCase locale="cs" />
    </SiteShell>
  )
}
