import { X } from 'lucide-react';
import { cn } from '~/lib/utils';
import { Text } from '../Text';

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  className?: string;
}

export function Chip({ label, onRemove, variant = 'default', size = 'md', className }: ChipProps) {
  const variantClasses = {
    default: 'bg-background-1/30 text-text-2',
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-complete/10 text-complete',
  };

  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-3',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-md',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      <Text variant="p" className="font-medium">
        {label}
      </Text>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="flex h-4 w-4 items-center justify-center rounded-full hover:bg-black/10"
          aria-label={`Remove ${label}`}
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}
