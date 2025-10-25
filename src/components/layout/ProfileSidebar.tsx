import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Speaker } from '~/types';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/';

type ProfileSidebarProps = {
  speaker: Speaker;
};

export function ProfileSidebar({ speaker }: ProfileSidebarProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      {speaker.bio && (
        <Card>
          <CardHeader>
            <CardTitle>{t('speaker.about')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Text variant="p" size="sm">
              {speaker.bio}
            </Text>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>{t('speaker.expertise')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {speaker.topics.map((topic: string, index: number) => (
              <Badge key={index} className="bg-stroke text-text-2 hover:bg-dark-base">
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('speaker.languages')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {speaker.languages.map((language: string, index: number) => (
              <div key={index} className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-text-2" />
                <Text variant="span" size="sm">
                  {language}
                </Text>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
