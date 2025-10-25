
import { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import { TableFilters } from './components/TableFilters'
import {
  Spinner,
} from '~/components'
import { SpeakersTable } from '~/features/speakers/components/SpeakersTable'
import {  getMockData } from '~/features/speakers/api/speakers'

export function DashboardPage() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['speakers'],
    queryFn: () => getMockData(),
  })
  if (isLoading) {
    return <Spinner size="lg" />
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!data) {
    return 'No data'
  }
    return (
        <main className="mx-auto px-8 py-6">
          <TableFilters topics={data.topics} languages={data.languages} />
  
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Spinner size="lg" />
              </div>
            }
          >
            <SpeakersTable speakers={data.speakers} />
          </Suspense>
        </main>
    )
  }
  