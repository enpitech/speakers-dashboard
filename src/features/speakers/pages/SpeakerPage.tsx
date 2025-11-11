import { Route } from '~/routes/speaker.$speakerId'
import { useSpeaker } from '~/features/speakers/dal/speakers.resource'
import { Spinner } from "~/ui-core"
import { Avatar, SocialIconsGroup  } from '~/ui-core/'

export function SpeakerPage() {
  const { speakerId } = Route.useParams()
  const { data, isLoading,isError } = useSpeaker(speakerId)
  if (isLoading) return <Spinner size="lg" />
  if (isError || !data?.speaker) return <div>Error loading speaker</div>
  return (
    <div>
       <Avatar
        src={data.speaker.avatar}
        size="lg"
        alt={data.speaker.name}
        fallback={data.speaker.name}
      />
      <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{data.speaker.name}</h1>
      <p className="text-gray-600">{data.speaker.bio}</p>
      <p className="text-gray-600">Topics: {data.speaker.topics.join(', ')}</p>
      <p className="text-gray-600">Languages: {data.speaker.languages.join(', ')}</p>
      <p className="text-gray-600">Years of Experience: {data.speaker.yearsOfExperience}</p>
      <p className="text-gray-600">Location: {data.speaker.location}</p>
      <p className="text-gray-600">Email: {data.speaker.email}</p>
      <p className="text-gray-600">Phone: {data.speaker.phone}</p>
      <SocialIconsGroup
        links={data.speaker.socialLinks}
        maxIcons={6}
        showCount={false}
      />  
      </div>
    </div>
  )
}
