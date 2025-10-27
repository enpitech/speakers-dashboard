import { cn } from "../../../lib/utils";
import type React from "react";

interface TableCellProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

export function TableCell({ children, width, className }: TableCellProps) {
  return (
    <div
      className={cn(
        "flex items-center min-w-0",
        className
      )}
      style={width ? { width } : undefined}
      role="cell"
    >
      <div className="min-w-0 flex-1 break-words">
        {children}
      </div>
    </div>
  );
}
