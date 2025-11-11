import { Input,Spinner } from '~/ui-core'

type SearchBarProps = {
  search: string
  setSearch: (search: string) => void
  isFetching: boolean
}

export function SearchBar({ search, setSearch, isFetching }: SearchBarProps) {
  return (
    <div className="flex w-full relative">
      <Input
        className="mb-4"
        placeholder="Search speakers by name, topics, languages, etc."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={isFetching}
      />
      {isFetching && <Spinner className="absolute right-2 top-2 " size="sm" />}
    </div>
  )
}
