import { Avatar } from './Avatar'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Shadcn/Avatar',
  component: Avatar,
  args: {
    alt: 'John Doe',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    src: 'https://github.com/shadcn.png',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    src: 'https://github.com/shadcn.png',
  },
}

export const Fallback: Story = {
  args: {
    src: undefined,
    fallback: 'John Doe',
  },
}
