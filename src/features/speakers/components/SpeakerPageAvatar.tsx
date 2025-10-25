import type { Speaker } from '~/types';
import { Avatar,   } from '~/components';

export const SpeakerPageAvatar = ({ speaker }: { speaker: Speaker }) => {
  const { avatar, name } = speaker;


  return (
    <div
      className={`w-full h-full relative`}
    >
      {avatar ? (
        <Avatar
          src={avatar}
          alt={name}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-stroke text-text-2 flex items-center justify-center text-4xl font-bold">
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
};
