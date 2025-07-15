import { useEffect } from 'react';
import { useFetcher } from 'react-router';
import type { Speaker } from '~/lib/types';
import { Button } from './ui/button';
import { WandSparklesIcon } from 'lucide-react';

export const GenerateSpeakerBioButton = ({
  speaker,
  onGenerationComplete,
  isGenerating,
  setIsGenerating,
}: {
  speaker: Speaker;
  onGenerationComplete: (data: string) => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
}) => {
  const fetcher = useFetcher();
  const handleSuggestBioContentFromAI = async () => {
    setIsGenerating(true);
    const formData = new FormData();
    formData.append('speakerId', speaker.id);
    await fetcher.submit(formData, {
      method: 'post',
      action: '/generate-speaker-bio',
      preventScrollReset: true,
    });
    setIsGenerating(false);
  };

  useEffect(() => {
    if (fetcher.data) {
      onGenerationComplete(fetcher.data);
    }
  }, [fetcher.data]);
  return (
    <form>
      <input type="hidden" name="speakerId" value={speaker.id} />
      <GenerateButton
        isGenerating={isGenerating}
        handleSuggestBioContentFromAI={handleSuggestBioContentFromAI}
      />
    </form>
  );
};

const GenerateButton = ({
  isGenerating,
  handleSuggestBioContentFromAI,
}: {
  isGenerating: boolean;
  handleSuggestBioContentFromAI: () => void;
}) => {
  return (
    <Button
      size="sm"
      type="submit"
      variant="ghost"
      disabled={isGenerating}
      className={`w-8 h-8 p-0  bg-pink-500 ${isGenerating ? 'animate-pulse' : ''}`}
      onClick={handleSuggestBioContentFromAI}
    >
      <WandSparklesIcon className="w-4 h-4" color="pink" />
    </Button>
  );
};
