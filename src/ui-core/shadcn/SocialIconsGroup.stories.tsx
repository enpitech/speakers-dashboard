import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import { SocialIconsGroup } from './SocialIconsGroup'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { SocialLink } from '~/lib/types'
import { SocialPlatformEnum } from '~/lib/types'

const meta: Meta<typeof SocialIconsGroup> = {
  title: 'UI/Shadcn/SocialIconsGroup',
  component: SocialIconsGroup,
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
type Story = StoryObj<typeof SocialIconsGroup>

const links: SocialLink[] = [
  { platform: SocialPlatformEnum.LINKEDIN, url: 'https://linkedin.com' },
  { platform: SocialPlatformEnum.TWITTER, url: 'https://twitter.com' },
  { platform: SocialPlatformEnum.GITHUB, url: 'https://github.com' },
  { platform: SocialPlatformEnum.YOUTUBE, url: 'https://youtube.com' },
]

export const Default: Story = {
  args: {
    links: links,
  },
}

export const WithMaxIcons: Story = {
  args: {
    links: [
      ...links,
      { platform: SocialPlatformEnum.INSTAGRAM, url: 'https://instagram.com' },
      { platform: SocialPlatformEnum.FACEBOOK, url: 'https://facebook.com' },
    ],
    maxIcons: 3,
    showCount: true,
  },
}
