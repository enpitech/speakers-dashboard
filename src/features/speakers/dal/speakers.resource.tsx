import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { createTopic, getSpeaker, getSpeakers, getTopics } from '../api'

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

export const useTopics = () => {
  return useQuery({
    queryKey: ['topics'],
    queryFn: () => getTopics(),
  })
}

export const useCreateTopic = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['topic'],
    mutationFn: (title: string) => createTopic({ data: { title } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['topics'] }),
  })
}
