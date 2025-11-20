import { Text } from './Text'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Text> = {
  title: 'UI/Shadcn/Text',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Paragraph: Story = {
  args: {
    children: 'This is a paragraph',
    variant: 'p',
  },
}

export const Heading1: Story = {
  args: {
    children: 'Heading 1',
    variant: 'h1',
  },
}

export const Heading2: Story = {
  args: {
    children: 'Heading 2',
    variant: 'h2',
  },
}

export const CustomSize: Story = {
  args: {
    children: 'Large Text',
    variant: 'p',
    size: 'lg',
  },
}
