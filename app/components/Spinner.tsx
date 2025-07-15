import { cn } from '~/lib/utils';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export function Spinner({ size = 'sm', className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'w-4 h-4 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin',
        size === 'sm' && 'w-4 h-4',
        size === 'md' && 'w-6 h-6',
        size === 'lg' && 'w-8 h-8',
        className,
      )}
    ></div>
  );
}
