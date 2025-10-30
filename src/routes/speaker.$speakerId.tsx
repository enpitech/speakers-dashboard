import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Spinner } from '~/components/ui/spinner'
import { SpeakerPage } from '~/features/speakers/pages/SpeakerPage'

export const Route = createFileRoute('/speaker/$speakerId')({
  component: () => <Suspense fallback={<Spinner size="lg" />}>
    <SpeakerPage />
  </Suspense>,

})
