import { createServerFn } from '@tanstack/react-start'
import { useQuery } from '@tanstack/react-query'
import { prisma } from '../../../../prisma/client'
import { mapTopicsToValueLabel } from '../utils'

export const getTopics = createServerFn({
  method: 'GET',
})
  .inputValidator(() => {})
  .handler(async () => {
    try {
      const topics = await prisma.topic.findMany()
      return {
        topics: mapTopicsToValueLabel(topics),
      }
    } catch (error) {
      throw new Error('Failed to get topics')
    }
  })

export const useTopics = () => {
  return useQuery({
    queryKey: ['topics'],
    queryFn: () => getTopics(),
  })
}
