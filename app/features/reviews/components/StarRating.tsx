import { Star } from 'lucide-react';
import { cn } from '~/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function StarRating({
  rating,
  maxRating = 5,
  className,
  readonly = false,
  size = 'md',
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div
      className={cn('flex gap-1', className)}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      {[...Array(maxRating)].map((_, index) => {
        const isFilled = index < rating;
        return (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              'transition-colors',
              isFilled
                ? 'fill-[var(--color-blue-500)] stroke-[var(--color-blue-500)]'
                : 'fill-transparent stroke-[var(--color-blue-500)]',
            )}
          />
        );
      })}
    </div>
  );
}
