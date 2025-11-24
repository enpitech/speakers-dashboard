import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { prisma } from '../../../../prisma/client'
import { mapTopicToValueLabel } from '../utils'

const createTopicParamsSchema = z.object({
  title: z.string(),
})
type createTopicParams = z.infer<typeof createTopicParamsSchema>
export const createTopic = createServerFn({
  method: 'POST',
})
  .inputValidator((data: createTopicParams) => data)
  .handler(async ({ data }) => {
    try {
      const topic = await prisma.topic.create({
        data: {
          title: data.title,
        },
        select: {
          id: true,
          title: true,
        },
      })
      return {
        topic: mapTopicToValueLabel(topic),
      }
    } catch (error) {
      throw new Error('Failed to create topic')
    }
  })

export const useCreateTopic = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['topic', 'create'],
    mutationFn: (title: string) => createTopic({ data: { title } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['topics'] }),
  })
}
