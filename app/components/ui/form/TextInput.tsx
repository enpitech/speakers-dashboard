import { forwardRef, useState } from 'react';
import { cn } from '~/lib/utils';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, icon, fullWidth = true, className, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    return (
      <div className={cn('flex flex-col', fullWidth ? 'w-full' : '')}>
        {label && (
          <label htmlFor={props.id} className="mb-1 text-sm font-medium text-text-2">
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex items-center rounded-md border border-stroke  px-3 py-2 transition-colors',
            focused ? 'border-primary' : 'hover:border-dark-base',
            error ? 'border-red-500' : '',
            className,
          )}
        >
          {icon && <div className="mr-2">{icon}</div>}
          <input
            ref={ref}
            className="w-full bg-transparent text-text-2 outline-none placeholder:text-text-1"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
