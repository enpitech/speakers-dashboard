import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import { SpeakersTable } from './SpeakersTable'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Speaker } from '~/lib/types'
import { SocialPlatformEnum } from '~/lib/types'

const meta: Meta<typeof SpeakersTable> = {
  title: 'Features/Speakers/SpeakersTable',
  component: SpeakersTable,
  decorators: [
    (Story) => {
      const rootRoute = createRootRoute({
        component: Story,
      })
      const router = createRouter({
        routeTree: rootRoute,
        history: createMemoryHistory(),
      })
      return <RouterProvider router={router} />
    },
  ],
}

export default meta
type Story = StoryObj<typeof SpeakersTable>

const mockSpeaker: Speaker = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '123-456-7890',
  avatar: 'https://github.com/shadcn.png',
  location: 'New York',
  yearsOfExperience: 5,
  sessionsUrl: 'https://sessionize.com/jane-doe',
  bio: 'Experienced speaker',
  topics: ['React', 'Node.js'],
  languages: ['English'],
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true,
  socialLinks: [
    {
      id: 's1',
      platform: SocialPlatformEnum.TWITTER,
      url: 'https://twitter.com/jane',
      speakerId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
}

const mockSpeakers: Speaker[] = [
  mockSpeaker,
  {
    ...mockSpeaker,
    id: '2',
    name: 'John Smith',
    topics: ['Angular', 'Vue'],
    socialLinks: [],
  },
  {
    ...mockSpeaker,
    id: '3',
    name: 'Bob Brown',
    avatar: null,
    topics: ['Rust', 'Go'],
    languages: ['German'],
  },
]

export const Default: Story = {
  args: {
    speakers: mockSpeakers,
    isLoading: false,
  },
}

export const Loading: Story = {
  args: {
    speakers: [],
    isLoading: true,
  },
}

export const Empty: Story = {
  args: {
    speakers: [],
    isLoading: false,
  },
}
