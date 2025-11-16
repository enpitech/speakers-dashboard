import { cn } from '~/lib/utils'

type TextProps = {
  children: React.ReactNode
  className?: string
  variant?: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  size?: 'sm' | 'md' | 'lg'
}

export function Text({ children, className, variant = 'p', size }: TextProps) {
  const variantClasses = {
    p: 'text-foreground p-2 text-text-500',
    span: 'text-foreground p-2 text-text-500',
    h1: 'text-foreground p-2 font-bold text-primary text-4xl',
    h2: 'text-foreground p-2 font-bold text-primary text-xl',
    h3: 'text-foreground p-2 font-bold text-primary text-lg',
  }

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
  }

  const textSize =
    sizeClasses[
      size
        ? size
        : variant === 'h1'
          ? '4xl'
          : variant === 'h2'
            ? '3xl'
            : variant === 'h3'
              ? '2xl'
              : 'md'
    ]
  switch (variant) {
    case 'p':
      return (
        <p className={cn(variantClasses.p, textSize, className)}>{children}</p>
      )
    case 'span':
      return (
        <span className={cn(variantClasses.span, textSize, className)}>
          {children}
        </span>
      )
    case 'h1':
      return (
        <h1 className={cn(variantClasses.h1, textSize, className)}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={cn(variantClasses.h2, textSize, className)}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={cn(variantClasses.h3, textSize, className)}>
          {children}
        </h3>
      )
    default:
      return (
        <p className={cn(variantClasses.p, textSize, className)}>{children}</p>
      )
  }
}
