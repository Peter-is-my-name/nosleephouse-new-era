import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { homeHref } from '@/lib/routes'
import { buildHomeMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildHomeMetadata('en')

export default function Page() {
  return <HomePage locale="en" altHref={homeHref('cs')} />
}
