import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ComponentErrorBoundary } from './ComponentErrorBoundary';
import type { Speaker } from '~/lib/types';
import { SpeakerExpertise } from '~/components/SpeakerExpertise';
import { FileWarningIcon } from 'lucide-react';
import { Text } from '~/components/Text';

export const SpeakerExpertiseCard = ({ speaker }: { speaker: Speaker }) => {
  const { t } = useTranslation();
  const { topics } = speaker;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Text variant="h2" size="lg">
            {t('speaker.expertise')}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ComponentErrorBoundary
          onError={error => {
            console.log('Error loading expertise', error);
          }}
          fallback={
            <div className="flex flex-col items-center gap-2 bg-red-200 p-4 rounded-lg">
              <Text variant="p" size="sm">
                {t('error.loading.expertise')}
              </Text>
              <FileWarningIcon color="red" />
            </div>
          }
        >
          <SpeakerExpertise topics={topics} />
        </ComponentErrorBoundary>
      </CardContent>
    </Card>
  );
};
