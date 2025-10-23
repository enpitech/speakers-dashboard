import { useState, useRef, type KeyboardEvent } from 'react';
import { Chip } from './Chip';
import { FormError } from './form/FormError';
import { cn } from '~/lib/utils';

export interface ChipInputProps {
  label: string;
  limit?: number;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
}

export function ChipInput({
  label,
  limit,
  values,
  onChange,
  placeholder = 'Type and press Enter',
  className,
  disabled = false,
  error,
}: ChipInputProps) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (limit && values.length >= limit) return;

      if (!values.includes(inputValue.trim())) {
        onChange([...values, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const handleRemove = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-1 flex items-center justify-between">
        <label className="text-sm font-medium text-text-2">{label}</label>
        {limit && <span className="text-xs text-text-1">(limit of {limit})</span>}
      </div>
      <div
        onClick={handleContainerClick}
        className={cn(
          'flex min-h-[42px] w-full flex-wrap gap-2 rounded-md border border-stroke  p-2 transition-colors hover:border-dark-base focus-within:border-primary',
          error ? 'border-red-500' : '',
          disabled ? 'cursor-not-allowed opacity-70' : 'cursor-text',
        )}
      >
        {values.map((value, index) => (
          <Chip key={index} label={value} onRemove={() => handleRemove(index)} size="sm" />
        ))}
        {(!limit || values.length < limit) && (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={values.length === 0 ? placeholder : ''}
            className="flex-grow bg-transparent text-sm text-text-2 outline-none placeholder:text-text-1"
            disabled={disabled}
          />
        )}
      </div>
      <FormError message={error} />
    </div>
  );
}
