import { SearchBar } from './SearchBar'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SearchBar> = {
  title: 'Features/Speakers/SearchBar',
  component: SearchBar,
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    search: '',
    setSearch: () => {},
    isFetching: false,
  },
}

export const WithSearchText: Story = {
  args: {
    search: 'React',
    setSearch: () => {},
    isFetching: false,
  },
}

export const Loading: Story = {
  args: {
    search: 'Angular',
    setSearch: () => {},
    isFetching: true,
  },
}
