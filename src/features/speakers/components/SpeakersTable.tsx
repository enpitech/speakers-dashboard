import type { Speaker } from '~/lib/types';
import { use } from 'react';
import { useTranslation } from 'react-i18next';
import { TableCell } from '~/components/ui/table/TableCell';
import { Table } from '~/components/ui/table/Table';
import { SpeakerRow } from './SpeakersRow';
import { Text } from '~/components/ui/Text';

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

  const tableHeaders = (
    <div className="flex w-full items-center">
      <TableCell width={columnWidths.name}>
        <Text variant="span" className="truncate">
          {t('table.header.name')}
        </Text>
      </TableCell>
      <TableCell width={columnWidths.topics}>
        <Text variant="span" className="truncate">
          {t('table.header.topics')}
        </Text>
      </TableCell>
      <TableCell width={columnWidths.languages}>
        <Text variant="span" className="truncate">
          {t('table.header.languages')}
        </Text>
      </TableCell>
      <TableCell width={columnWidths.social}>
        <Text variant="span" className="truncate">
          {t('table.header.social')}
        </Text>
      </TableCell>
      <TableCell width={columnWidths.information}>
        <Text variant="span" className="truncate">
          {t('table.header.information')}
        </Text>
      </TableCell>
    </div>
  );

  return (
    <Table
      data={speakers}
      renderRow={speaker => (
        <SpeakerRow key={speaker.id} speaker={speaker} columnWidths={columnWidths} />
      )}
      headers={tableHeaders}
      emptyMessage={t('no.speakers.found')}
      aria-label="Speakers list"
      className="w-full min-h-[500px] bg-white"
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
