import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { buildHomeMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildHomeMetadata('sk')

export default function Page() {
  return <HomePage locale="sk" />
}
