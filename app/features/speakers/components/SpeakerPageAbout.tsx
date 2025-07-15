import { SpeakerBioFormCard } from '~/components/SpeakerBioFormCard';
import type { Speaker } from '~/lib/types';
import { SpeakerExpertiseCard } from '~/components/SpeakerExpertiseCard';
import { SpeakerLanguagesCard } from '~/components/SpeakerLanguagesCard';

export const SpeakerPageAbout = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="md:col-span-1 space-y-6">
      <SpeakerBioFormCard speaker={speaker} />
      <SpeakerExpertiseCard speaker={speaker} />
      <SpeakerLanguagesCard speaker={speaker} />
    </div>
  );
};
