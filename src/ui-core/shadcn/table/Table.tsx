import React from 'react'
import { cn } from '../../../lib/utils'
import { Row } from './Row'

interface TableProps<T> {
  data: T[]
  isLoading: boolean
  renderRow: (item: T, index: number) => React.ReactNode
  headers?: React.ReactNode
  emptyMessage?: string
  className?: string
  'aria-label'?: string
}

export function Table<T>({
  data,
  isLoading,
  renderRow,
  headers,
  className,
  'aria-label': ariaLabel = 'Data table',
}: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto relative animate-in fade-in slide-in-from-top-4 duration-500">
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
          <Row
            className={cn(
              'border-b animate-in fade-in slide-in-from-top-4 duration-500',
            )}
          >
            {headers}
          </Row>
        )}
        {data.length > 0 && (
          <div
            role="rowgroup"
            className={cn(
              'divide-y',
              'overflow-y-auto',
              'max-h-[500px]',
              isLoading && 'blur-sm',
            )}
          >
            {data.map((item, index) => renderRow(item, index))}
          </div>
        )}
        {data.length === 0 && (
          <div className="flex items-center justify-center h-full mt-4">
            <p className="text-center text-sm text-gray-500">No data found</p>
          </div>
        )}
      </div>
    </div>
  )
}
