import { createFileRoute } from '@tanstack/react-router'
import { SpeakerPage } from '~/pages/speaker/SpeakerPage'

export const Route = createFileRoute('/dashboard/speaker/$speakerId')({
  component: SpeakerPage,
})
