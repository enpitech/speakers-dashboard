import { SpeakerCard } from './SpeakerCard'
import type { Speaker } from '~/lib/types'

interface SpeakersGridProps {
  speakers: Speaker[]
  isLoading: boolean
}

export function SpeakersGrid({ speakers, isLoading }: SpeakersGridProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <span className="loader "></span>
      </div>
    )
  }

  if (speakers.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500 text-lg">No speakers found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 animate-in fade-in slide-in-from-top-4 duration-500 auto-rows-fr">
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} speaker={speaker} />
      ))}
    </div>
  )
}
