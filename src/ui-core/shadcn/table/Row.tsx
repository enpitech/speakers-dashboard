import type React from 'react'
import { cn } from '~/lib/utils'

interface RowProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Row({ children, className, onClick }: RowProps) {
  return (
    <div
      className={cn(
        'flex items-center px-6 py-4',
        onClick && 'cursor-pointer hover:bg-[var(--color-background-50)]',
        className,
      )}
      onClick={onClick}
      role="row"
    >
      {children}
    </div>
  )
}
