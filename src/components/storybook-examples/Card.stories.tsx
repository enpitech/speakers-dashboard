import { Card, CardContent, CardHeader, CardTitle } from './Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'outlined', 'elevated'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          This is some card content that demonstrates how the card component works.
        </CardContent>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
        </CardHeader>
        <CardContent>
          This card has a border outline for better definition.
        </CardContent>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
        </CardHeader>
        <CardContent>
          This card has a shadow to appear elevated from the background.
        </CardContent>
      </>
    ),
  },
};

export const WithoutHeader: Story = {
  args: {
    children: (
      <CardContent>
        This is a simple card with just content, no header.
      </CardContent>
    ),
  },
};
