import { AlertTriangle } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/Text';
import { useTranslation } from 'react-i18next';

export const GeneralError = ({ error }: { error: Error }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-background-2 rounded-lg border border-stroke">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <AlertTriangle className="w-8 h-8 text-primary" />
        </div>
        <Text variant="h2" size="lg">
          {t('error.general.title')}
        </Text>
        <Text variant="p" size="sm">
          {t('error.general.description')}
        </Text>
        <Text variant="p" size="sm">
          {(error as Error)?.message ?? 'Unknown error'}
        </Text>
        <div className="flex gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            {t('error.general.try.again')}
          </Button>
          <Button
            variant="outline"
            className="border-stroke text-text-2 hover:bg-background-1"
            onClick={() => (window.location.href = '/')}
          >
            {t('error.general.go.home')}
          </Button>
        </div>
      </div>
    </div>
  );
};
