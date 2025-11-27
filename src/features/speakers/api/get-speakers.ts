import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
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
