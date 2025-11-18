import { RegisterForm } from './RegisterForm'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof RegisterForm> = {
  title: 'UI/Layout/Header/RegisterForm',
  component: RegisterForm,
}

export default meta
type Story = StoryObj<typeof RegisterForm>

export const Default: Story = {}
