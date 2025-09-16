import { Wifi, WifiOff } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/Text';
import { useTranslation } from 'react-i18next';

export const NetworkError = ({ error }: { error: Error }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-background-1 rounded-lg border border-stroke">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <WifiOff className="w-8 h-8 text-primary" />
        </div>
        <Text variant="h2" size="lg">
          {t('error.network.title')}
        </Text>
        <Text variant="p" size="sm">
          {t('error.network.description')}
        </Text>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-stroke text-text-2 hover:bg-background-2"
            onClick={() => window.location.reload()}
          >
            <Text variant="span" size="sm">
              {t('error.network.refresh')}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};
