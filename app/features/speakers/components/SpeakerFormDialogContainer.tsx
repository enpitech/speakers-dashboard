import { useEffect, useState } from 'react';
import { SpeakerFormDialogView } from './SpeakerFormDialogView';
import { useNavigation, useActionData } from 'react-router';
import type { SpeakerFormData } from '~/lib/types';
import { Dialog } from '~/components/Dialog';

interface SpeakerFormDialogContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpeakerFormDialogContainer({ isOpen, onClose }: SpeakerFormDialogContainerProps) {
  const [formData, setFormData] = useState<SpeakerFormData>({
    name: '',
    languages: [],
    topics: [],
    sessionsUrl: '',
    socialLinks: [{ platform: 'twitter', url: '' }],
  });

  const navigation = useNavigation();
  const actionData = useActionData<{ errors?: Record<string, string>; success?: boolean }>();
  const [errors, setErrors] = useState<Partial<Record<keyof SpeakerFormData, string>>>({
    ...actionData?.errors,
  });
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (actionData?.success) {
      onClose();
    }
  }, [actionData?.success, onClose]);

  useEffect(() => {
    setErrors({ ...actionData?.errors });
  }, [actionData?.errors]);

  const handleChange = (data: Partial<SpeakerFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(data).forEach(key => {
        delete newErrors[key as keyof SpeakerFormData];
      });
      return newErrors;
    });
  };

  const handleAddSocialNetwork = () => {
    setFormData(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { platform: 'twitter', url: '' }],
    }));
  };

  const handleRemoveSocialNetwork = (index: number) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index),
    }));
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Register as a Speaker">
      <SpeakerFormDialogView
        formData={formData}
        onChange={handleChange}
        onAddSocialNetwork={handleAddSocialNetwork}
        onRemoveSocialNetwork={handleRemoveSocialNetwork}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </Dialog>
  );
}
