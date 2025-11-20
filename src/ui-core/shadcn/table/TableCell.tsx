import { cn } from '../../../lib/utils'
import type React from 'react'

interface TableCellProps {
  children: React.ReactNode
  width?: string
  className?: string
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <div
      className={cn('flex items-center flex-1 min-w-[150px]', className)}
      role="cell"
    >
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
