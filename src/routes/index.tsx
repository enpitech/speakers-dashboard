import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Spinner } from '~/ui-core'
import { DashboardPage } from '~/features/speakers/pages/DashboardPage'

export const Route = createFileRoute('/')({
  component: () => (
    <Suspense fallback={<Spinner className="size-48" />}>
      <DashboardPage />
    </Suspense>
  ),
  errorComponent: () => <p>Error</p>,
})
