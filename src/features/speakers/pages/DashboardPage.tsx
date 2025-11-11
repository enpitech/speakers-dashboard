import { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { SpeakersTable } from '~/features/speakers/'
import { useDebounce } from '~/lib/hooks'
import { useSpeakers } from '~/features/speakers/dal/speakers.resource'

export function DashboardPage() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const { data, isFetching } = useSpeakers(debouncedSearch)
  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        isFetching={isFetching}
      />
      <SpeakersTable
        speakers={data?.speakers ?? []}
        isLoading={Boolean(search) && isFetching}
      />
    </>
  )
}
