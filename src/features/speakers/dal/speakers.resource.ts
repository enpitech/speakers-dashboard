import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createSpeaker, getSpeaker, getSpeakers } from '../api'
import type { createSpeakerParams } from '../api/create-speaker'

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

export const useCreateSpeaker = ({ onSuccess }: { onSuccess?: () => void }) => {
  return useMutation({
    mutationKey: ['speaker', 'create'],
    mutationFn: (data: createSpeakerParams) => createSpeaker({ data }),
    onSuccess: () => {
      toast.success('Speaker registered successfully')
      onSuccess?.()
    },
    onError: () => {
      toast.error('Failed to register speaker')
    },
  })
}
