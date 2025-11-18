import { Field, FieldDescription, FieldError, FieldLabel } from './field'
import { Input } from './input'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Field> = {
  title: 'UI/Shadcn/Field',
  component: Field,
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="Enter username" />
      <FieldDescription>This is your public display name.</FieldDescription>
    </Field>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="Enter username" />
    </Field>
  ),
}

export const WithError: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel className="text-destructive">Username</FieldLabel>
      <Input placeholder="Enter username" className="border-destructive" />
      <FieldError errors={[{ message: 'Username is already taken' }]} />
    </Field>
  ),
}
