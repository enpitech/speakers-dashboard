import  React from 'react';
import { cn } from '../../../lib/utils';
import { Row } from './Row';

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
  const defaultEmptyMessage = 'No data found';

  if (!data.length) {
    return (
      <p className={className}>{emptyMessage || defaultEmptyMessage}</p>
    );
  }

  return (
    <div className=" w-full overflow-x-auto bg-card">
      <div
        className={cn(
          'min-w-full ',
          'border',
          'rounded-lg',
          'min-w-[700px]',
          className,
        )}
        role="table"
        aria-label={ariaLabel}
      >
        {headers && (
          <Row className="border-b">
            {headers}
          </Row>
        )}
        <div role="rowgroup" className="divide-y">
          {data.map((item, index) => renderRow(item, index))}
        </div>
      </div>
    </div>
  );
}
