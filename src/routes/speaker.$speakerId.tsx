import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Spinner } from '~/ui-core'
import { SpeakerPage } from '~/features/speakers/pages/SpeakerPage'

export const Route = createFileRoute('/speaker/$speakerId')({
  component: () => (
    <Suspense fallback={<Spinner className="size-48" />}>
      <SpeakerPage />
    </Suspense>
  ),
})
