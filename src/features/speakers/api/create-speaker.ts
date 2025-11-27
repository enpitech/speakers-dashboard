import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
import { mapTopicsToValueLabel } from '../utils'
import { prisma } from '../../../../prisma/client'
import { SocialPlatformEnum } from '~/lib/types'

export const createSpeakerSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  avatar: z.string().url('Invalid URL'),
  bio: z.string().min(1, 'Required'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must contain exactly 10 digits'),
  location: z.string().min(1, 'Required'),
  topics: z.array(z.string()).min(1, 'At least one topic is required'),
  languages: z.string().min(1, 'Required'),
  yearsOfExperience: z.number().min(0),
  isActive: z.boolean(),
  sessionsUrl: z.string(),
  socialLinks: z.array(
    z.object({
      platform: z.nativeEnum(SocialPlatformEnum),
      url: z.string().url('Invalid URL'),
    }),
  ),
})
export type createSpeakerParams = z.infer<typeof createSpeakerSchema>

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
