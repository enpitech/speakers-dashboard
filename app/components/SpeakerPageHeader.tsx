import { Link } from 'react-router';
import { MapPin, Clock } from 'lucide-react';
import type { Speaker } from '~/lib/types';
import { SocialIcon } from './SocialIcon';
import { Text } from './Text';
import { SpeakerPageAvatar } from './SpeakerPageAvatar';
export const SpeakerPageHeader = ({ speaker }: { speaker: Speaker }) => {
  const { avatar, name, location, experience, rating, sessionsUrl, socialLinks } = speaker;
  return (
    <div className="bg-stroke rounded-lg overflow-hidden mb-8">
      <div className="h-48 bg-gradient-to-r from-primary to-secondary/90"></div>
      <div className="bg-white p-6 relative">
        <div className="absolute -top-16 left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <SpeakerPageAvatar speaker={speaker} />
        </div>

        <div className="ml-44 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <Text variant="h1" className="text-text-2">
              {name}
            </Text>
            <div className="flex items-center gap-2 text-text-2 mt-1">
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              )}
              {experience && (
                <div className="flex items-center gap-1 ml-4">
                  <Clock className="w-4 h-4" />
                  <span>{experience}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ml-44 flex items-center gap-3 mt-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="hover:opacity-80 transition-opacity"
              aria-label={`${link.platform} profile`}
            >
              <SocialIcon platform={link.platform} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
