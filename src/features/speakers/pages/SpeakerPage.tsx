import { useSuspenseQuery } from '@tanstack/react-query'
import { Route } from '~/routes/dashboard/speaker.$speakerId'
import { getSpeakers } from '~/features/speakers/api'

export function SpeakerPage() {
    const { speakerId } = Route.useParams()
    const { data } = useSuspenseQuery({
        queryKey: ['speaker', speakerId],
        queryFn: () => getSpeakers(),
    })
  return <div>SpeakerPage {data.speakers.find((speaker) => speaker.id === speakerId)?.name}</div>
}