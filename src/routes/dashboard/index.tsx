import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { DashboardPage } from '~/features/speakers/pages/DashBoardPage'
import { Spinner } from '~/components'

export const Route = createFileRoute('/dashboard/')({
  component: () => 
  <Suspense fallback={<Spinner size="lg" />}>
      <DashboardPage />
  </Suspense>,         
  errorComponent: () =>  <p>Error</p>,
})

