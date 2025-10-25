import { useOptimistic } from 'react';
import { useTransition } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSubmit } from 'react-router';
import type { Speaker } from '~/types';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { TextareaInput } from '~/components/ui/form/TextareaInput';
import { Button } from '~/components/ui/button';
import { Pencil, Loader2 } from 'lucide-react';
import { Text } from '~/components';
import { GenerateSpeakerBioButton } from './GenerateSpeakerBioButton';

export const SpeakerBioFormCard = ({ speaker }: { speaker: Speaker }) => {
  const { t } = useTranslation();
  const { bio } = speaker;
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  const [isGenerating, setIsGenerating] = useState(false);
  const [_isPending, startTransition] = useTransition();
  const [optimisticBio, setOptimisticBio] = useOptimistic(
    bio || '',
    (_state: string, newBio: string) => {
      return newBio;
    },
  );
  const submit = useSubmit();

  const handleSubmit = async (newBio: string) => {
    startTransition(async () => {
      setOptimisticBio(newBio);
      const formData = new FormData();
      formData.append('bio', newBio);
      formData.append('speakerId', speaker.id);
      await submit(formData, { method: 'post' });
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          <Text variant="h2" size="lg">
            {t('speaker.about')}
          </Text>
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="h-8 w-8 p-0"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form className="space-y-4">
            <TextareaInput
              name="bio"
              value={editedBio}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditedBio(e.target.value)}
              placeholder={t('speaker.bio.placeholder')}
              className={`min-h-[100px]`}
              icon={
                <GenerateSpeakerBioButton
                  speaker={speaker}
                  isGenerating={isGenerating}
                  setIsGenerating={setIsGenerating}
                  onGenerationComplete={handleSubmit}
                />
              }
            />
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={isGenerating}
                onClick={() => {
                  setIsEditing(false);
                  setEditedBio(bio);
                }}
              >
                {t('speaker.form.cancel')}
              </Button>
              <Button
                type="submit"
                size="sm"
                disabled={isGenerating}
                onClick={() => {
                  setIsEditing(false);
                  handleSubmit(editedBio || '');
                }}
                title={isGenerating ? t('ai.generating.bio') : ''}
              >
                {isGenerating ? (
                  <>
                    {t('ai.generating.bio')}
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  t('speaker.form.save')
                )}
              </Button>
            </div>
          </form>
        ) : (
          <Text variant="p" size="sm">
            {replaceCustomTags(optimisticBio)}
          </Text>
        )}
      </CardContent>
    </Card>
  );
};

function replaceCustomTags(input: string) {
  // This regex matches any XML/HTML-style tags and captures the tag name and content
  return input.replace(/<linkedin>(.*?)<\/linkedin>/g, '<a href="$1" target="_blank">$1</a>');
}