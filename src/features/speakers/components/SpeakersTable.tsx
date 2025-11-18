import { SpeakerRow } from './SpeakerRow'
import type { Speaker } from '~/lib/types'
import { Table } from '~/ui-core/shadcn/table/Table'
import { TableCell } from '~/ui-core/shadcn/table/TableCell'

const columnWidths = {
  name: '25%',
  topics: '25%',
  languages: '25%',
  social: '25%',
}

interface SpeakersTableViewProps {
  speakers: Speaker[]
  isLoading: boolean
}

export function SpeakersTable({ speakers, isLoading }: SpeakersTableViewProps) {
  return (
    <Table
      data={speakers}
      isLoading={isLoading}
      renderRow={(speaker) => (
        <SpeakerRow
          key={speaker.id}
          speaker={speaker}
          columnWidths={columnWidths}
        />
      )}
      headers={
        <>
          <TableCell>Name</TableCell>
          <TableCell>Topics</TableCell>
          <TableCell>Languages</TableCell>
          <TableCell>Social</TableCell>
        </>
      }
      emptyMessage="No speakers found"
      aria-label="Speakers list"
      className="w-full min-h-[500px]  shadow-sm rounded-lg overflow-hidden"
    />
  )
}
