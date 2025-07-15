import { cn } from '../lib/utils';
import { Button } from './ui/button';
import type React from 'react';
import { Text } from './Text';
import { YoutubeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SessionsButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'children' | 'variant'> {
  className?: string;
  isPending?: boolean;
}

export function SessionsButton({ isPending = false, className, ...props }: SessionsButtonProps) {
  const { t } = useTranslation();
  return (
    <Button
      variant="outline"
      isLoading={isPending}
      className={cn('gap-1 text-sm font-medium items-center justify-center', className)}
      aria-label="View sessions"
      {...props}
    >
      <Text variant="span" size="sm" className="hidden md:block md:p-0">
        {t('sessions.button')}
      </Text>
      <YoutubeIcon className="w-4 h-4" />
    </Button>
  );
}
