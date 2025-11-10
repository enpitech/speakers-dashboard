import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { prisma } from '../../../../prisma/client'

const getSpeakersParamsSchema = z.object({
  limit: z.number().optional(),
  offset: z.number().optional(),
  search: z.string().optional(),
  sort: z.enum(['name', 'email', 'phone', 'location', 'topics', 'languages', 'experience', 'sessionsUrl', 'bio', 'socialLinks', 'createdAt', 'updatedAt']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
})
type GetSpeakersParams = z.infer<typeof getSpeakersParamsSchema>
export const getSpeakers = createServerFn({
  method: 'GET',
})
.inputValidator((data?: GetSpeakersParams) => data ?? {})
.handler(async ({data}) => {
  try {
    return {
      speakers: await prisma.speaker.findMany({
        where: {
          isActive: true,
        },
        include: {
          socialLinks: true,
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
            ],
          },
        }),
      }),
    }
  } catch (error) {
    throw new Error('Failed to get speakers')
  }
})
