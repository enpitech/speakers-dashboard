import { Route } from '~/routes/speaker.$speakerId'
import { useSpeaker } from '~/features/speakers/dal/speakers.resource'
import {
  Avatar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  SocialIconsGroup,
  Spinner,
} from '~/ui-core'

export function SpeakerPage() {
  const { speakerId } = Route.useParams()
  const { data, isLoading, isError } = useSpeaker(speakerId)

  if (isLoading)
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <Spinner className="size-48" />
      </div>
    )

  if (isError || !data?.speaker)
    return (
      <div className="flex h-[50vh] w-full items-center justify-center text-destructive">
        Error loading speaker
      </div>
    )

  const { speaker } = data

  return (
    <div className="container mx-auto flex justify-center px-4 py-10">
      <Card className="w-full max-w-3xl shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <CardHeader className="flex flex-col items-center gap-6 bg-muted/30 pb-8 pt-8 sm:flex-row sm:items-start sm:text-left">
          <Avatar
            src={speaker.avatar}
            size="lg"
            alt={speaker.name}
            fallback={speaker.name}
            className="h-32 w-32 text-4xl ring-4 ring-background animate-in zoom-in duration-500 "
          />
          <div className="flex flex-col items-center gap-2 sm:items-start animate-in fade-in slide-in-from-right-4 duration-500 ">
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">
              {speaker.name}
            </CardTitle>
            <CardDescription className="max-w-xl text-center text-lg text-muted-foreground sm:text-left">
              {speaker.bio}
            </CardDescription>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="grid gap-x-12 gap-y-8 p-8 md:grid-cols-2">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 ">
            <TitleText title="Topics" />
            <div className="flex flex-wrap gap-2">
              {speaker.topics.map((topic) => (
                <span
                  key={topic.value}
                  className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground transition-all duration-200 hover:scale-105 hover:shadow-md animate-in fade-in zoom-in"
                >
                  {topic.label}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 ">
            <TitleText title="Languages" />
            <p className="font-medium">{speaker.languages.join(', ')}</p>
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 ">
            <TitleText title="Experience" />
            <p className="font-medium">{speaker.yearsOfExperience} years</p>
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 ">
            <TitleText title="Location" />
            <p className="font-medium">{speaker.location}</p>
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 ">
            <TitleText title="Contact Info" />
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${speaker.email}`}
                className="font-medium text-primary transition-all duration-200 hover:underline hover:translate-x-1"
              >
                {speaker.email}
              </a>
              <a
                href={`tel:${speaker.phone}`}
                className="font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1"
              >
                {speaker.phone}
              </a>
            </div>
          </div>
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 ">
            <TitleText title="Social Links" />
            <SocialIconsGroup
              links={speaker.socialLinks}
              maxIcons={6}
              showCount={false}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const TitleText = ({ title }: { title: string }) => {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {title}
    </h3>
  )
}
