import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { buildHomeMetadata } from '@/lib/siteMeta'

export const metadata: Metadata = buildHomeMetadata('cs')

export default function Page() {
  return <HomePage locale="cs" />
}
