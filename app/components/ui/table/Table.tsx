import type React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../../lib/utils';
import { Row } from './Row';
import { TableEmptyView } from './TableEmptyView';

interface TableProps<T> {
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  headers?: React.ReactNode;
  emptyMessage?: string;
  className?: string;
  'aria-label'?: string;
}

export function Table<T>({
  data,
  renderRow,
  headers,
  emptyMessage,
  className,
  'aria-label': ariaLabel = 'Data table',
}: TableProps<T>) {
  const { t } = useTranslation();
  const defaultEmptyMessage = t('no.data.found');

  if (!data?.length) {
    return (
      <TableEmptyView emptyMessage={emptyMessage || defaultEmptyMessage} className={className} />
    );
  }

  return (
    <div className="w-full overflow-x-auto bg-card">
      <div
        className={cn(
          'min-w-full bg-[var(--color-background-0)]',
          'border border-[var(--color-background-100)]',
          'rounded-lg',
          'overflow-hidden',
          className,
        )}
        role="table"
        aria-label={ariaLabel}
      >
        {headers && (
          <Row className="border-b border-[var(--color-background-100)] bg-[var(--color-background-50)]">
            {headers}
          </Row>
        )}
        <div role="rowgroup" className="divide-y divide-[var(--color-background-100)]">
          {data.map((item, index) => renderRow(item, index))}
        </div>
      </div>
    </div>
  );
}
