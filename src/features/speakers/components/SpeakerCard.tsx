import { useNavigate } from '@tanstack/react-router'
import type { Speaker } from '~/lib/types'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '~/ui-core/shadcn/card'
import { Avatar } from '~/ui-core/shadcn/Avatar'
import { SocialIconsGroup } from '~/ui-core/shadcn/SocialIconsGroup'
import { Route as SpeakerRoute } from '~/routes/speaker.$speakerId'
import { Badge } from '~/ui-core/shadcn/Badge'

interface SpeakerCardProps {
  speaker: Speaker
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  const navigate = useNavigate()
  return (
    <Card
      className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer min-w-[300px]"
      onClick={() =>
        navigate({
          to: SpeakerRoute.to,
          params: { speakerId: speaker.id },
        })
      }
    >
      <CardHeader className="items-center flex flex-col gap-4 text-center  animate-in fade-in slide-in-from-top-4 duration-500">
        <Avatar
          src={speaker.avatar}
          alt={speaker.name}
          size="lg"
          fallback={speaker.name}
          className="h-32 w-32 text-2xl mb-4"
        />
        <h3 className="text-xl font-bold">{speaker.name}</h3>
        <p className="text-sm ">{speaker.location}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
        {speaker.bio && <p className="text-sm  line-clamp-4">{speaker.bio}</p>}

        {speaker.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {speaker.topics.map((topic, index) => (
              <Badge variant="secondary" key={index}>
                {topic}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-4 border-t">
        <div className="flex items-center justify-between w-full">
          <SocialIconsGroup links={speaker.socialLinks} />
        </div>
      </CardFooter>
    </Card>
  )
}
