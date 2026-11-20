import type { Metadata } from 'next'
import SiteShell from '@/components/SiteShell'
import ProjectsPage from '@/components/ProjectsPage'
import { pathsFor, projectsHref } from '@/lib/routes'
import { buildProjectsMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildProjectsMetadata('sk')

export default function ProjectsListingPage() {
  return (
    <SiteShell locale="sk" alternates={pathsFor(projectsHref)} mainId="top">
      <ProjectsPage locale="sk" />
    </SiteShell>
  )
}
