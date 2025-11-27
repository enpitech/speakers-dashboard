import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { prisma } from '../../../../prisma/client'
import { mapTopicsToValueLabel } from '../utils'

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
