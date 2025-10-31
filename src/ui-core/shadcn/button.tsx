import  React from 'react';
import { cn } from '~/lib/utils';

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
    'cursor-pointer inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-color';

  const variants = {
    default: "bg-primary-color hover:bg-secondary-color text-white px-6 py-2 rounded-lg h-full",  
      outline:
      'border border-primary-color bg-background text-text-600 hover:bg-primary-color hover:border-secondary-color group px-6 py-2 rounded-lg h-full hover:text-white',
    ghost: 'bg-transparent text-text-600 hover:bg-primary-color hover:text-white',
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
