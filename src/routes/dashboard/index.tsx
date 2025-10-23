import { createFileRoute } from '@tanstack/react-router'
import { Suspense, useState } from 'react'
import { Calendar, Star, TrendingUp, Users } from 'lucide-react'
import type { Review, Session, Speaker } from '~/types'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Spinner } from '~/components/ui/Spinner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { Text } from '~/components/ui/Text'
import { ReviewsList } from '~/features/reviews/components/ReviewsList'
import {
  PastSessions,
  UpcomingSessions,
} from '~/features/sessions/components/SessionsList'
import { RegisterSpeakerButton } from '~/features/speakers/components/RegisterSpeakerButton'
import { SpeakersTable } from '~/features/speakers/components/SpeakersTable'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

// Mock data for demonstration
const mockSpeakers: Speaker[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    location: 'San Francisco, CA',
    experience: '5+ years',
    rating: 5,
    topics: ['React', 'TypeScript', 'Web Performance'],
    languages: ['English', 'Spanish'],
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/sarahjohnson' },
      { platform: 'twitter', url: 'https://twitter.com/sarahjohnson' },
    ],
    bio: 'Passionate about modern web development and performance optimization.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    location: 'New York, NY',
    experience: '8+ years',
    rating: 4,
    topics: ['Node.js', 'GraphQL', 'Microservices'],
    languages: ['English', 'Mandarin'],
    socialLinks: [
      { platform: 'github', url: 'https://github.com/michaelchen' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/michaelchen' },
    ],
    bio: 'Backend architect specializing in scalable systems.',
  },
  {
    id: '3',
    name: 'Emma Williams',
    avatar: 'https://i.pravatar.cc/150?img=3',
    location: 'London, UK',
    experience: '6+ years',
    rating: 5,
    topics: ['Vue.js', 'Testing', 'Accessibility'],
    languages: ['English', 'French'],
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/emmawilliams' },
      { platform: 'youtube', url: 'https://youtube.com/@emmawilliams' },
    ],
    bio: 'Advocate for accessible and inclusive web experiences.',
  },
]

const mockUpcomingSessions: Session[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    speakerId: '1',
    date: 'Nov 15, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    attendees: 150,
  },
  {
    id: '2',
    title: 'Building Scalable APIs',
    speakerId: '2',
    date: 'Nov 20, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'New York Convention Center',
    attendees: 200,
  },
]

const mockPastSessions: Session[] = [
  {
    id: '3',
    title: 'Introduction to TypeScript',
    speakerId: '1',
    date: 'Oct 10, 2024',
    time: '3:00 PM',
    location: 'Virtual',
    attendees: 300,
    videoUrl: 'https://youtube.com/watch?v=example',
  },
  {
    id: '4',
    title: 'Web Accessibility Best Practices',
    speakerId: '3',
    date: 'Oct 5, 2024',
    time: '1:00 PM',
    location: 'London Tech Hub',
    attendees: 120,
    videoUrl: 'https://youtube.com/watch?v=example',
  },
]

const mockReviews: Review[] = [
  {
    id: '1',
    speakerId: '1',
    author: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
    comment: 'Excellent speaker!',
    text: 'Sarah gave an amazing presentation on React patterns. Her examples were clear and practical.',
    date: 'Oct 12, 2024',
    createdAt: '2024-10-12',
  },
  {
    id: '2',
    speakerId: '2',
    author: 'Jane Smith',
    rating: 4,
    comment: 'Great content',
    text: 'Very informative session on building scalable APIs. Would recommend!',
    date: 'Oct 8, 2024',
    createdAt: '2024-10-08',
  },
]

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      title: 'Total Speakers',
      value: mockSpeakers.length.toString(),
      icon: Users,
      change: '+12%',
      description: 'from last month',
    },
    {
      title: 'Upcoming Sessions',
      value: mockUpcomingSessions.length.toString(),
      icon: Calendar,
      change: '+5%',
      description: 'scheduled this month',
    },
    {
      title: 'Average Rating',
      value: '4.7',
      icon: Star,
      change: '+0.3',
      description: 'across all speakers',
    },
    {
      title: 'Total Reviews',
      value: mockReviews.length.toString(),
      icon: TrendingUp,
      change: '+23%',
      description: 'this quarter',
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <Text variant="h1" className="text-4xl font-bold">
              Speakers Dashboard
            </Text>
            <Text
              variant="p"
              className="text-slate-600 dark:text-slate-400 mt-2"
            >
              Manage speakers, sessions, and reviews in one place
            </Text>
          </div>
          <RegisterSpeakerButton
            onClick={() => console.log('Register speaker')}
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                    <Text
                      variant="span"
                      className="text-xs text-slate-600 dark:text-slate-400"
                    >
                      {stat.description}
                    </Text>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Speakers</CardTitle>
                <CardDescription>
                  Browse and manage all registered speakers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-64">
                      <Spinner size="lg" />
                    </div>
                  }
                >
                  <SpeakersTable speakers={mockSpeakers} />
                </Suspense>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    View Speaker Details
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setActiveTab('sessions')}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Manage Sessions
                  </Button>
                  <Button
                    className="w-full justify-start"
                    variant="outline"
                    onClick={() => setActiveTab('reviews')}
                  >
                    <Star className="mr-2 h-4 w-4" />
                    View Reviews
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <Text variant="span" className="text-sm font-medium">
                        New speaker registered
                      </Text>
                      <Text
                        variant="span"
                        className="text-xs text-slate-600 block"
                      >
                        Sarah Johnson joined 2 hours ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <Text variant="span" className="text-sm font-medium">
                        Session scheduled
                      </Text>
                      <Text
                        variant="span"
                        className="text-xs text-slate-600 block"
                      >
                        Advanced React Patterns on Nov 15
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div className="flex-1">
                      <Text variant="span" className="text-sm font-medium">
                        New review submitted
                      </Text>
                      <Text
                        variant="span"
                        className="text-xs text-slate-600 block"
                      >
                        5-star review for Michael Chen
                      </Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>
                  Sessions scheduled for the upcoming weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingSessions sessions={mockUpcomingSessions} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Past Sessions</CardTitle>
                <CardDescription>
                  Previously completed sessions with recordings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PastSessions sessions={mockPastSessions} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Speaker Reviews</CardTitle>
                <CardDescription>
                  Feedback and ratings from attendees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ReviewsList reviews={mockReviews} rating={5} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
