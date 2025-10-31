import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Spinner } from '~/components/ui/Spinner'
import { DashboardPage } from '~/features/speakers/pages/DashboardPage'

export const Route = createFileRoute('/')({   component: () => 
      <Suspense fallback={<Spinner size="lg" />}>
        <DashboardPage />
      </Suspense>
 ,         
  errorComponent: () =>  <p>Error</p>, })
