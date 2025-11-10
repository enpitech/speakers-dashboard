import { useSuspenseQuery } from '@tanstack/react-query'
import { SpeakersTable } from '~/features/speakers/'
import { getSpeakers } from '~/features/speakers/api/'

export function DashboardPage() {
  const { data } = useSuspenseQuery({
    queryKey: ['speakers'],
    queryFn: () => getSpeakers()
  })
  return <SpeakersTable speakers={data.speakers} />
}
