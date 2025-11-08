import { createServerFn } from '@tanstack/react-start'
import { prisma } from '../../../../prisma/client'

export const getSpeakers = createServerFn({
  method: 'GET',
}).handler(async () => {
  try {
    return {
      speakers: await prisma.speaker.findMany({
        include: {
          socialLinks: true,
        },
      }),
    }
  } catch (error) {
    throw new Error('Failed to get speakers')
  }
})
