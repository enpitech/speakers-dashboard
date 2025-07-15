import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Text } from './Text';
import type { Speaker } from '~/lib/types';
import { useTranslation } from 'react-i18next';

export const SpeakerLanguagesCard = ({ speaker }: { speaker: Speaker }) => {
  const { languages } = speaker;
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Text variant="h2" size="lg">
            {t('speaker.languages')}
          </Text>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-text-2" />
              <Text variant="p" size="sm">
                {language}
              </Text>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
