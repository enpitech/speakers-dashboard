import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { prisma } from '../../../../prisma/client'
import { mapTopicsToValueLabel } from '../utils'

const getSpeakersParamsSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  search: z.string().optional(),
  sort: z
    .enum([
      'name',
      'email',
      'phone',
      'location',
      'topics',
      'languages',
      'yearsOfExperience',
      'sessionsUrl',
      'bio',
      'socialLinks',
      'createdAt',
      'updatedAt',
    ])
    .optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
})
type GetSpeakersParams = z.infer<typeof getSpeakersParamsSchema>
export const getSpeakers = createServerFn({
  method: 'GET',
})
  .inputValidator((data?: GetSpeakersParams) => data ?? {})
  .handler(async ({ data }) => {
    try {
      const speakers = await prisma.speaker.findMany({
        where: {
          isActive: true,
        },
        include: {
          socialLinks: true,
          topics: { select: { title: true, id: true } },
        },
        orderBy: {
          [data.sort || 'name']: data.sortOrder || 'asc',
        },
        ...(data.limit && { take: data.limit }),
        ...(data.offset && { skip: data.offset }),
        ...(data.search && {
          where: {
            isActive: true,
            OR: [
              { name: { contains: data.search, mode: 'insensitive' } },
              {
                topics: {
                  some: {
                    title: { contains: data.search, mode: 'insensitive' },
                  },
                },
              },
              { languages: { hasSome: [data.search.toLowerCase()] } },
              { bio: { contains: data.search, mode: 'insensitive' } },
              {},
            ],
          },
        }),
      })

      const mappedSpeakers = speakers.map((speaker) => {
        return {
          ...speaker,
          topics: mapTopicsToValueLabel(speaker.topics),
        }
      })

      return {
        speakers: mappedSpeakers,
      }
    } catch (error) {
      throw new Error('Failed to get speakers')
    }
  })

const getSpeakerParamsSchema = z.object({
  id: z.string(),
})
type GetSpeakerParams = z.infer<typeof getSpeakerParamsSchema>
export const getSpeaker = createServerFn({
  method: 'GET',
})
  .inputValidator((data: GetSpeakerParams) => data)
  .handler(async ({ data }) => {
    try {
      const speaker = await prisma.speaker.findUnique({
        where: { id: data.id },
        include: {
          socialLinks: true,
          topics: { select: { title: true, id: true } },
        },
      })

      if (speaker == null) {
        return null
      }

      return {
        speaker: { ...speaker, topics: mapTopicsToValueLabel(speaker.topics) },
      }
    } catch (error) {
      throw new Error('Failed to get speaker')
    }
  })
