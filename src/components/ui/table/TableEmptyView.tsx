import { Table } from 'lucide-react';
import { cn } from '~/lib/utils';
import { Button } from '../button';
import { Text } from '~/components/Text';
export function TableEmptyView({
  emptyMessage,
  className,
  onReload,
}: {
  emptyMessage: string;
  className?: string;
  onReload?: () => void;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8',
        'bg-[var(--color-background-0)]',
        'border border-[var(--color-background-100)]',
        'rounded-lg',
        className,
      )}
    >
      <Table className="w-10 h-10 text-text-2" />
      <Text
        variant="p"
        className="text-[var(--color-text-600)] text-lg font-medium mt-4 mb-2 text-center"
      >
        {emptyMessage}
      </Text>

      {onReload && (
        <Button onClick={onReload} variant="outline" size="sm" className="mt-4">
          Reload Data
        </Button>
      )}
    </div>
  );
}
