import { keepPreviousData, useQuery  } from "@tanstack/react-query"
import { getSpeaker,getSpeakers  } from "../api"

export const useSpeakers = (debouncedSearch: string) => {
return useQuery({
    queryKey: ['speakers', debouncedSearch],
    queryFn: () => getSpeakers({ data: { search: debouncedSearch } }),
    placeholderData: keepPreviousData,
  })
}


export const useSpeaker = (speakerId: string) => {
  return useQuery({
    queryKey: ['speaker', speakerId],
    queryFn: () => getSpeaker({ data: { id: speakerId } }),
  })
}