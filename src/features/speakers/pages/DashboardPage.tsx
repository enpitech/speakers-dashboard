import { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { SpeakersGrid } from '../components/SpeakersGrid'
import { useDebounce } from '~/hooks'
import { useSpeakers } from '~/features/speakers/dal/speakers.resource'

export function DashboardPage() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const { data, isFetching, isLoading } = useSpeakers(debouncedSearch)
  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        isFetching={isFetching}
      />
      <SpeakersGrid speakers={data?.speakers ?? []} isLoading={isLoading} />
    </>
  )
}
