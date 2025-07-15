import { cn } from '~/lib/utils';
import type React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'default',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'cursor-pointer inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue-400)]';

  const variants = {
    default: 'bg-[var(--color-blue-400)] text-background hover:bg-[var(--color-blue-600)]',
    outline:
      'border border-[var(--color-blue-400)] bg-[var(--color-background-0)] text-[var(--color-text-600)] hover:bg-[var(--color-blue-100)] hover:border-[var(--color-blue-600)] group',
    ghost: 'bg-transparent text-[var(--color-text-600)] hover:bg-[var(--color-blue-100)]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const states = {
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
    active: 'active:scale-95',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        !disabled && !isLoading && states.active,
        (disabled || isLoading) && states.disabled,
        isLoading && states.loading,
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </button>
  );
}
