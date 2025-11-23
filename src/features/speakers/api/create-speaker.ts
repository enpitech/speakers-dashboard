import { createServerFn } from '@tanstack/react-start'
import { prisma } from 'prisma/client'
import z from 'zod'
import { SocialPlatform as PrismaSocialPlatformEnum } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mapTopicsToValueLabel } from '../utils'

const createSpeakerParamsSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  avatar: z.string(),
  location: z.string(),
  yearsOfExperience: z.number(),
  sessionsUrl: z.string(),
  socialLinks: z.array(
    z.object({
      platform: z.nativeEnum(PrismaSocialPlatformEnum),
      url: z.string(),
    }),
  ),
  bio: z.string(),
  topics: z.array(z.string()),
  languages: z.string(),
  isActive: z.boolean().default(false),
})

export type createSpeakerParams = z.infer<typeof createSpeakerParamsSchema>

export const createSpeaker = createServerFn({
  method: 'POST',
})
  .inputValidator((data: createSpeakerParams) => data)
  .handler(async ({ data }) => {
    try {
      const speaker = await prisma.speaker.create({
        data: {
          ...data,
          socialLinks: {
            create: data.socialLinks,
          },
          topics: {
            connectOrCreate: data.topics.map((topic) => ({
              where: { title: topic },
              create: { title: topic },
            })),
          },
          languages: data.languages
            .split(',')
            .map((language) => language.trim()),
        },
        include: {
          socialLinks: true,
          topics: { select: { title: true, id: true } },
        },
      })
      return {
        speaker: { ...speaker, topics: mapTopicsToValueLabel(speaker.topics) },
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      throw new Error('Failed to create speaker')
    }
  })

export const useCreateSpeaker = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['topic'],
    mutationFn: (data: createSpeakerParams) => createSpeaker({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topics'] })
      onSuccess?.()
    },
  })
}
