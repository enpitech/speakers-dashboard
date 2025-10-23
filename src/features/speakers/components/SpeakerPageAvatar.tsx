import type { Speaker } from '~/types';
import { Avatar } from '~/components/Avatar';
import { useFetcher } from 'react-router';
import { useState } from 'react';
import { Spinner } from '~/components/Spinner';

export const SpeakerPageAvatar = ({ speaker }: { speaker: Speaker }) => {
  const { avatar, name } = speaker;
  const fetcher = useFetcher();
  const [isGenerating, setIsGenerating] = useState(false);
  const handleSuggestBioContentFromAI = async () => {
    setIsGenerating(true);
    const formData = new FormData();
    formData.append('speakerId', speaker.id);
    await fetcher.submit(formData, {
      method: 'post',
      action: '/generate-speaker-avatar',
      preventScrollReset: true,
    });
    setIsGenerating(false);
  };

  return (
    <div
      className={`w-full h-full relative ${isGenerating ? 'animate-pulse' : ''}`}
      onClick={handleSuggestBioContentFromAI}
    >
      {isGenerating ? (
        <Spinner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 " />
      ) : null}
      {avatar ? (
        <Avatar
          src={fetcher.data ? fetcher.data : avatar}
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
