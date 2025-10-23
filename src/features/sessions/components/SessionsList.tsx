import { Calendar, Clock, MapPin, Users, YoutubeIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import type { Session } from '~/types';
import { Text } from '~/components/Text';
import { EmptyResponseView } from '~/components/EmptyResponseView';
import { useTranslation } from 'react-i18next';

type UpcomingSessionsProps = {
  sessions?: Session[];
};

export function UpcomingSessions({ sessions = [] }: UpcomingSessionsProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-text-2">Upcoming Sessions</h2>

      {sessions.length > 0 ? (
        sessions.map(session => (
          <Card key={session.id} className="overflow-hidden">
            <div className="border-l-4 border-primary">
              <CardHeader>
                <CardTitle>{session.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-text-2" />
                      <Text variant="span" size="sm">
                        {session.date}
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-text-2" />
                      <Text variant="span" size="sm">
                        {session.time}
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-text-2" />
                      <Text variant="span" size="sm">
                        {session.location}
                      </Text>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-text-2" />
                      <Text variant="span" size="sm">
                        {session.attendees} {t('sessions.attendees')}
                      </Text>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-end">
                <Button>{t('sessions.register.now')}</Button>
              </CardContent>
            </div>
          </Card>
        ))
      ) : (
        <EmptyResponseView message={t('sessions.no.upcoming')} />
      )}
    </div>
  );
}

type PastSessionsProps = {
  sessions?: Session[];
};

export function PastSessions({ sessions = [] }: PastSessionsProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <Text variant="h2" size="lg">
        {t('sessions.past.title')}
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessions.length > 0 ? (
          sessions.map(session => (
            <Card key={session.id} className="overflow-hidden">
              <div className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle>
                    <Text variant="h3" size="md">
                      {session.title}
                    </Text>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-text-2" />
                        <Text variant="span" size="sm">
                          {session.date}
                        </Text>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-text-2" />
                        <Text variant="span" size="sm">
                          {session.attendees} {t('sessions.attendees')}
                        </Text>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-end">
                  {session.videoUrl && (
                    <Button variant="outline">
                      <YoutubeIcon className="w-4 h-4" />
                      <Text variant="span" size="sm" className="ml-2">
                        {t('sessions.watch.recording')}
                      </Text>
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))
        ) : (
          <EmptyResponseView message={t('sessions.no.past')} />
        )}
      </div>
    </div>
  );
}
