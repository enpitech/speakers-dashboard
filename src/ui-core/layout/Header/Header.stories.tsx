import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import { Header } from './Header'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Header> = {
  title: 'UI/Layout/Header',
  component: Header,
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
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
