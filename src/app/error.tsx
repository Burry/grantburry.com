'use client'

import ErrorView from '@/components/Error'

export default function ErrorBoundary() {
  return <ErrorView statusCode={500} />
}
