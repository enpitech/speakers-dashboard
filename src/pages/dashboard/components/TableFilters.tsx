import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Speaker } from '~/types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Spinner  } from '~/components'
import { getMockData } from '~/features/speakers/api/speakers'

export function TableFilters({ topics, languages }: { topics:Speaker['topics'], languages: Speaker['languages'] }) {

  const queryClient = useQueryClient()

  const { mutate: applyFilters, isPending } = useMutation({
    mutationKey: ['speakers'],
    mutationFn: (filters: { topics: string[], languages: string[] }) => {
      return getMockData(filters)
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['speakers'], data)
    },
    
  })

  return (
    <div className="mb-6">
    <div className="flex items-center gap-4">

      <Select onValueChange={(value: string) => applyFilters({ topics: [value], languages: [] })}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Topics" />
        </SelectTrigger>
        <SelectContent>
       {topics.map((topic) => (
        <SelectItem key={topic} value={topic}>{topic}</SelectItem>
       ))}

        </SelectContent>

      </Select>

      {/* Languages Filter */}
      <Select onValueChange={(value: string) => applyFilters({ topics: [], languages: [value] })}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Languages" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language} value={language}>{language}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isPending ? <Spinner size="lg" /> : null}

    </div>
  </div>
  )
}