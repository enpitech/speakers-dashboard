import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import { SpeakerRow } from './SpeakerRow'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Speaker } from '~/lib/types'
import { SocialPlatformEnum } from '~/lib/types'

const meta: Meta<typeof SpeakerRow> = {
  title: 'Features/Speakers/SpeakerRow',
  component: SpeakerRow,
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
type Story = StoryObj<typeof SpeakerRow>

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
  topics: ['React', 'Node.js', 'GraphQL'],
  languages: ['English', 'French'],
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
    {
      id: 's2',
      platform: SocialPlatformEnum.LINKEDIN,
      url: 'https://linkedin.com/in/jane',
      speakerId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
}

const columnWidths = {
  name: '25%',
  topics: '25%',
  languages: '25%',
  social: '25%',
}

export const Default: Story = {
  args: {
    speaker: mockSpeaker,
    columnWidths: columnWidths,
  },
}

export const LongContent: Story = {
  args: {
    speaker: {
      ...mockSpeaker,
      topics: [
        'React',
        'Node.js',
        'GraphQL',
        'Kubernetes',
        'Docker',
        'AWS',
        'Microservices',
        'Serverless',
      ],
      languages: [
        'English',
        'French',
        'Spanish',
        'German',
        'Italian',
        'Portuguese',
      ],
    },
    columnWidths: columnWidths,
  },
}
