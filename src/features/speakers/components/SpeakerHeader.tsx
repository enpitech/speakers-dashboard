import { Clock, MapPin, Star, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import type { Speaker } from '~/types';
import { SocialLinks } from '~/components/ui/SocialLinks';
import { Text } from '~/components';
import { useTranslation } from 'react-i18next';

type SpeakerHeaderProps = {
  speaker: Speaker;
};

export function SpeakerHeader({ speaker }: SpeakerHeaderProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-stroke rounded-lg overflow-hidden mb-8">
      <div className="h-48 bg-gradient-to-r from-primary to-primary/90"></div>
      <div className="bg-white p-6 relative">
        <div className="absolute -top-16 left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          {speaker.avatar ? (
            <img
              src={speaker.avatar || '/placeholder.svg'}
              alt={speaker.name}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-stroke text-text-2 flex items-center justify-center text-4xl font-bold">
              {speaker.name.charAt(0)}
            </div>
          )}
        </div>

        <div className="ml-44 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <Text variant="h1" size="lg" className="text-text-2">
              {speaker.name}
            </Text>
            <div className="flex items-center gap-2 text-text-2 mt-1">
              {speaker.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <Text variant="p" size="sm" className="text-text-2">
                    {speaker.location}
                  </Text>
                </div>
              )}
              {speaker.experience && (
                <div className="flex items-center gap-1 ml-4">
                  <Clock className="w-4 h-4" />
                  <Text variant="p" size="sm" className="text-text-2">
                    {speaker.experience}
                  </Text>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="flex items-center bg-stroke px-3 py-1 rounded-full shadow-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < (speaker.rating || 0) ? 'fill-primary text-primary' : 'fill-stroke text-stroke'
                  }`}
                />
              ))}
            </div>

            {speaker.sessionsUrl && (
              <Link
                to={speaker.sessionsUrl}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Text variant="p" size="sm" className="text-white">
                  {t('sessions.view.all')}
                </Text>
                <Youtube />
              </Link>
            )}
          </div>
        </div>

        <div className="ml-44 flex items-center gap-3 mt-4">
          <SocialLinks socialLinks={speaker.socialLinks} />
        </div>
      </div>
    </div>
  );
}
