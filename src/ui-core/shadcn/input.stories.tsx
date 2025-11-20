import { Input } from './input'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Input> = {
  title: 'UI/Shadcn/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Email',
    disabled: true,
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
}
