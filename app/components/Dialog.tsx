import { X } from 'lucide-react';
import { Text } from './Text';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

export function Dialog({ isOpen, onClose, children, title }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-text-1 hover:bg-background-1/20"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {title && (
          <Text variant="h2" size="lg" className="mb-4 text-text-2">
            {title}
          </Text>
        )}

        {children}
      </div>
    </div>
  );
}
