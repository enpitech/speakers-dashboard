import { use } from 'react';
import { SpeakerRow } from './SpeakersRow';
import type { Speaker } from '~/lib/types';
import { Table } from '~/ui-core/shadcn/table/Table';

const columnWidths = {
  name: '25%',
  topics: '25%',
  languages: '25%',
  social: '25%',
};

interface SpeakersTableViewProps {
  speakers: Speaker[];
}

export function SpeakersTable({ speakers }: SpeakersTableViewProps) {

  return (
    <Table
      data={speakers}
      renderRow={speaker => (
        <SpeakerRow key={speaker.id} speaker={speaker} columnWidths={columnWidths} />
      )}
      headers={null}
      emptyMessage="No speakers found"
      aria-label="Speakers list"
      className="w-full min-h-[500px] bg-white shadow-sm rounded-lg overflow-hidden"
    />
  );
}

type SuspendedSpeakersTableViewProps = {
  speakers: Promise<Speaker[]>;
};

export function SuspendedSpeakersTableView({ speakers }: SuspendedSpeakersTableViewProps) {
  const speakersData = use(speakers);
  return <SpeakersTable speakers={speakersData} />;
}
