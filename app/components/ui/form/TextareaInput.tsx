import { Textarea } from '../textarea';

export interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  id?: string;
  fullWidth?: boolean;
  name?: string;
}

export const TextareaInput = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  id,
  name,
  icon,
}: TextareaInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-text-2">
          {label}
        </label>
      )}
      <div className="relative">
        <Textarea value={value} onChange={onChange} placeholder={placeholder} name={name} />
        {icon && <div className="absolute right-2 top-1/2 -translate-y-1/2">{icon}</div>}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
