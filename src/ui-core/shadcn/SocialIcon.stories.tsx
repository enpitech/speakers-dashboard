import { SocialIcon } from './SocialIcon'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SocialPlatformEnum } from '~/lib/types'

const meta: Meta<typeof SocialIcon> = {
  title: 'UI/Shadcn/SocialIcon',
  component: SocialIcon,
  argTypes: {
    platform: {
      control: 'select',
      options: Object.values(SocialPlatformEnum),
    },
  },
}

export default meta
type Story = StoryObj<typeof SocialIcon>

export const LinkedIn: Story = {
  args: {
    platform: SocialPlatformEnum.LINKEDIN,
  },
}

export const Twitter: Story = {
  args: {
    platform: SocialPlatformEnum.TWITTER,
  },
}

export const GitHub: Story = {
  args: {
    platform: SocialPlatformEnum.GITHUB,
  },
}

export const YouTube: Story = {
  args: {
    platform: SocialPlatformEnum.YOUTUBE,
  },
}

export const Instagram: Story = {
  args: {
    platform: SocialPlatformEnum.INSTAGRAM,
  },
}
