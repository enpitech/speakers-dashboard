import { Label } from './label'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Label> = {
  title: 'UI/Shadcn/Label',
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Accept terms and conditions',
  },
}
