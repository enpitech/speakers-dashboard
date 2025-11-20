import { cn } from '~/lib/utils'

interface AvatarProps {
  src?: string | null
  alt: string
  size?: 'sm' | 'md' | 'lg'
  fallback?: string
  className?: string
}

const getFallbackInitials = (name: string) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Avatar({
  src,
  alt,
  size = 'md',
  fallback = 'User',
  className,
}: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-12 w-12 text-base',
    lg: 'h-16 w-16 text-lg',
  }

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden ring-2 ring-[var(--color-background-1)]',
        'bg-[var(--color-background-2)]',
        sizeClasses[size],
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-[var(--color-text-1)]"
          role="img"
          aria-label={alt}
        >
          {getFallbackInitials(fallback)}
        </div>
      )}
    </div>
  )
}
