import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'UI/Shadcn/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading…',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};