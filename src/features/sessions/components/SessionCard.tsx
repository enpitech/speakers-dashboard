import { Button } from '~/components/ui/button';
import { Calendar, Users } from 'lucide-react';
import { SocialIcon } from '~/components/ui/SocialIcon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import type { Session } from '~/types';
import { Text } from '~/components';
import { useTranslation } from 'react-i18next';
import { cn } from '~/lib/utils';

export const SessionCard = ({ session }: { session: Session }) => {
  const { id, title, date, attendees, videoUrl } = session;
  const { t } = useTranslation();
  const isPast = new Date(date) < new Date();
  return (
    <Card key={id} className={cn('overflow-hidden', isPast && 'bg-muted/50')}>
      <div className="border-l-4 border-primary">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-text-2" />
                <Text variant="span" size="sm">
                  {date}
                </Text>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-text-2" />
                <Text variant="span" size="sm">
                  {attendees} {t('sessions.attendees')}
                </Text>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end">
          {videoUrl && (
            <Button variant="outline" color="secondary">
              <SocialIcon platform="youtube" />
              <Text variant="span" size="sm">
                {t('sessions.watch.recording')}
              </Text>
            </Button>
          )}
        </CardContent>
      </div>
    </Card>
  );
};
