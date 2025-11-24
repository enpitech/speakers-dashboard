import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createTopic, getTopics } from '../api'

export const useTopics = () => {
  return useQuery({
    queryKey: ['topics'],
    queryFn: () => getTopics(),
  })
}

export const useCreateTopic = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['topic', 'create'],
    mutationFn: (title: string) => createTopic({ data: { title } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['topics'] }),
  })
}
