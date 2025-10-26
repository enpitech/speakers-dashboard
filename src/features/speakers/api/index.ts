import { createServerFn } from '@tanstack/react-start'
import { mockSpeakers } from './mock'

export const getSpeakers = createServerFn({
  method: 'GET',
}).handler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    speakers: mockSpeakers,
  }
})
