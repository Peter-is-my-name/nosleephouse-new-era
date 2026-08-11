import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import ProjectsPage from '@/components/ProjectsPage'
import { projectsHref } from '@/lib/routes'
import { buildProjectsMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildProjectsMetadata('en')

export default function ProjectsListingPage() {
  return (
    <SiteShell locale="en" altHref={projectsHref('cs')} mainId="top">
      <ProjectsPage locale="en" />
    </SiteShell>
  )
}
