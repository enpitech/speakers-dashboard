import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
import { mapTopicsToValueLabel } from '../utils'
import { prisma } from '../../../../prisma/client'
import { SocialPlatformEnum } from '~/lib/types'

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
      platform: z.nativeEnum(SocialPlatformEnum),
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
