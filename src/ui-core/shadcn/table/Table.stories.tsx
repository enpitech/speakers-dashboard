import { Table } from './Table'
import { TableCell } from './TableCell'
import { Row } from './Row'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Table> = {
  title: 'UI/Shadcn/Table',
  component: Table,
}

export default meta
type Story = StoryObj<typeof Table<any>>

const data = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
  { id: 3, name: 'Bob Johnson', role: 'Guest' },
]

export const Default: Story = {
  args: {
    data: data,
    isLoading: false,
    headers: (
      <>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Role</TableCell>
      </>
    ),
    renderRow: (item) => (
      <Row key={item.id} className="border-b">
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.role}</TableCell>
      </Row>
    ),
  },
}

export const Loading: Story = {
  args: {
    data: data,
    isLoading: true,
    headers: (
      <>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Role</TableCell>
      </>
    ),
    renderRow: (item) => (
      <Row key={item.id} className="border-b">
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.role}</TableCell>
      </Row>
    ),
  },
}

export const Empty: Story = {
  args: {
    data: [],
    isLoading: false,
    headers: (
      <>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Role</TableCell>
      </>
    ),
    renderRow: () => null,
  },
}
