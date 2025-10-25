import { useQuery } from '@tanstack/react-query'
import { Route } from '../../routes/dashboard/speaker.$speakerId'
import { 
  getMockData, 
} from '~/features/speakers/api/speakers'
import { Spinner, Text } from '~/components'
import { SpeakerPageHeader } from '~/features/speakers/components/SpeakerPageHeader'
import { SpeakerPageAbout } from '~/features/speakers/components/SpeakerPageAbout'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

export function SpeakerPage() {
  const { speakerId } = Route.useParams()
  const { data, isLoading, error } = useQuery({
    queryKey: ['speaker', speakerId],
    queryFn: () => getMockData(),
  })
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text variant="p" className="text-red-500">
          Error: {error.message}
        </Text>
      </div>
    )
  }
  
  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text variant="p">No data available</Text>
      </div>
    )
  }
  
  const speaker = data.speakers.find((s) => s.id === speakerId)
  
  if (!speaker) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text variant="p">Speaker not found</Text>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Speaker Header */}
        <SpeakerPageHeader speaker={speaker} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - About Section */}
          <SpeakerPageAbout speaker={speaker} />

          {/* Right Column - Sessions & Reviews */}
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="sessions" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

           
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
  