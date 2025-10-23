import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/speaker/$speakerId')({
  component: SpeakerPage,
})

function SpeakerPage() {
  const { speakerId } = Route.useParams()
  return <div>Speaker ID: {speakerId}</div>
}
