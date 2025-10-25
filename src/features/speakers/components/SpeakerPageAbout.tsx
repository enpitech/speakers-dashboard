import type { Speaker } from '~/types';
import { SpeakerBioFormCard } from '~/features/speakers/components/SpeakerBioFormCard';
import { SpeakerExpertiseCard } from '~/features/speakers/components/SpeakerExpertiseCard';
import { SpeakerLanguagesCard } from '~/features/speakers/components/SpeakerLanguagesCard';

export const SpeakerPageAbout = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="md:col-span-1 space-y-6">
      <SpeakerBioFormCard speaker={speaker} />
      <SpeakerExpertiseCard speaker={speaker} />
      <SpeakerLanguagesCard speaker={speaker} />
    </div>
  );
};
