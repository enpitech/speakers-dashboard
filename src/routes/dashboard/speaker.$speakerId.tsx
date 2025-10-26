import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { SpeakerPage } from '~/features/speakers/pages/SpeakerPage'
import { Spinner } from '~/components'

export const Route = createFileRoute('/dashboard/speaker/$speakerId')({
  component: () => (
    <Suspense fallback={<Spinner size="lg" />}>
      <SpeakerPage />
    </Suspense>
  ),
})
