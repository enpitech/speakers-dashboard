import { Table } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';
import { Text } from '~/components';

export function TableErrorFallback({ error }: { error: Error }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-6 bg-background-2 rounded-lg border border-stroke">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Table className="w-8 h-8 text-primary" />
        </div>
        <Text variant="h2">{t('table.data.error')}</Text>
        <Text variant="p">{t('table.error.message')}</Text>
        <div className="flex gap-4">
          <Button onClick={() => {}} className="bg-primary hover:bg-primary/90 text-white">
            {t('table.reload')}
          </Button>
        </div>
      </div>
    </div>
  );
}
