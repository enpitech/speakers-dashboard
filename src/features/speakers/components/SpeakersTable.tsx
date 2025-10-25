import { use } from 'react';
import { useTranslation } from 'react-i18next';
import { SpeakerRow } from './SpeakersRow';
import type { Speaker } from '~/lib/types';
import { Table } from '~/components/ui/table/Table';

const columnWidths = {
  name: '20%',
  topics: '20%',
  languages: '20%',
  social: '25%',
  information: '25%',
};

interface SpeakersTableViewProps {
  speakers: Speaker[];
}

export function SpeakersTable({ speakers }: SpeakersTableViewProps) {
  const { t } = useTranslation();

  return (
    <Table
      data={speakers}
      renderRow={speaker => (
        <SpeakerRow key={speaker.id} speaker={speaker} columnWidths={columnWidths} />
      )}
      headers={null}
      emptyMessage={t('no.speakers.found')}
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
