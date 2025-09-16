import { User, Youtube } from 'lucide-react';
import { Form } from 'react-router';
import { useTranslation } from 'react-i18next';
import { TextInput } from '~/components/ui/form/TextInput';
import { SocialNetworkInput } from '~/components/ui/form/SocialNetworkInput';
import { FormError } from '~/components/ui/form/FormError';
import type { SpeakerFormData } from '~/types';
import { TextareaInput } from '~/components/ui/form/TextareaInput';
import { ChipInput } from '~/components/ui/ChipInput';
import { Text } from '~/components/Text';
import { Button } from '~/components/ui/button';
import { ImageUploadInput } from '~/components/ui/form/ImageUploadInput';

type SpeakerFormDialogViewProps = {
  formData: SpeakerFormData;
  onChange: (data: Partial<SpeakerFormData>) => void;
  onAddSocialNetwork: () => void;
  onRemoveSocialNetwork: (index: number) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
};

export function SpeakerFormDialogView({
  formData,
  onChange,
  onAddSocialNetwork,
  onRemoveSocialNetwork,
  errors,
  isSubmitting,
}: SpeakerFormDialogViewProps) {
  const { t } = useTranslation();

  return (
    <Form method="post" action="/speakers" className="space-y-6">
      {/* Show generic form error if it exists */}
      {errors._form && (
        <div className="rounded-md bg-red-50 p-4">
          <FormError message={errors._form} />
        </div>
      )}

      {/* Convert form data to hidden inputs for submission */}
      <input type="hidden" name="name" value={formData.name} />
      <input type="hidden" name="languages" value={JSON.stringify(formData.languages)} />
      <input type="hidden" name="topics" value={JSON.stringify(formData.topics)} />
      <input type="hidden" name="sessionsUrl" value={formData.sessionsUrl} />
      <input type="hidden" name="socialLinks" value={JSON.stringify(formData.socialLinks)} />
      {formData.avatar && <input type="hidden" name="avatar" value={formData.avatar} />}

      {/* Avatar Upload */}
      <div className="flex justify-left">
        <ImageUploadInput
          image={formData.avatar}
          onChange={({ image }: any) => onChange({ avatar: image })}
        />
      </div>

      <TextInput
        label={t('speaker.form.name')}
        value={formData.name}
        onChange={e => onChange({ name: e.target.value })}
        placeholder={t('speaker.form.name.placeholder')}
        error={errors.name}
      />

      <ChipInput
        label={t('speaker.languages')}
        limit={8}
        values={formData.languages}
        onChange={languages => onChange({ languages })}
        placeholder={t('speaker.form.languages.placeholder')}
        error={errors.languages}
      />

      <ChipInput
        label={t('speaker.expertise')}
        limit={10}
        values={formData.topics}
        onChange={topics => onChange({ topics })}
        placeholder={t('speaker.form.topics.placeholder')}
        error={errors.topics}
      />

      <TextInput
        label={t('speaker.form.sessions.link')}
        value={formData.sessionsUrl}
        onChange={e => onChange({ sessionsUrl: e.target.value })}
        placeholder="https://youtube.com/..."
        icon={
          <Youtube
            size={18}
            className="text-red-500"
            onClick={() => onChange({ sessionsUrl: 'https://youtube.com/...' })}
          />
        }
        error={errors.sessionsUrl}
      />

      <TextareaInput
        label={t('speaker.form.bio')}
        value={formData.bio}
        onChange={e => onChange({ bio: e.target.value })}
        placeholder={t('speaker.bio.placeholder')}
        error={errors.bio}
      />
      <div className="space-y-4">
        <div className="flex flex-col">
          <Text variant="h3" size="sm" className="text-text-2">
            {t('speaker.form.social.networks')}
          </Text>
          <Text variant="p" size="sm" className="text-text-1">
            {t('speaker.form.social.description')}
          </Text>
        </div>

        {formData.socialLinks.map((social: any, index: number) => (
          <div key={index} className="space-y-2">
            <SocialNetworkInput
              value={social}
              onChange={newValue => {
                const updatedNetworks = [...formData.socialLinks];
                updatedNetworks[index] = newValue;
                onChange({ socialLinks: updatedNetworks });
              }}
            />
            {formData.socialLinks.length > 1 && (
              <Button
                type="button"
                onClick={() => onRemoveSocialNetwork(index)}
                variant="ghost"
                size="sm"
              >
                <Text variant="span" size="sm">
                  {t('speaker.form.remove')}
                </Text>
              </Button>
            )}
          </div>
        ))}

        {errors.socialLinks && <FormError message={errors.socialLinks} />}

        <Button type="button" onClick={onAddSocialNetwork} size="sm" variant="outline">
          <Text variant="span" size="sm">
            {t('speaker.form.add.more')}
          </Text>
        </Button>
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? t('speaker.form.signing.up') : t('speaker.form.sign.up')}
      </Button>
    </Form>
  );
}
