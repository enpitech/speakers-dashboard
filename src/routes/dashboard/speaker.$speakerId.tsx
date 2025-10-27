import { createFileRoute } from '@tanstack/react-router'
import { SpeakerPage } from '~/features/speakers/pages/SpeakerPage'

export const Route = createFileRoute('/dashboard/speaker/$speakerId')({
  component: SpeakerPage,
})
