import { useForm } from '@tanstack/react-form'
import { createSpeakerSchema } from '../api/create-speaker'
import type { createSpeakerParams } from '../api/create-speaker'
import type { RegisterFormValues } from '../components/RegisterForm/form-fields'
import { SocialPlatformEnum } from '~/lib/types'

const defaultValues: RegisterFormValues = {
  name: '',
  location: '',
  languages: '',
  topics: [] as string[],
  yearsOfExperience: 0,
  email: '',
  phone: '',
  bio: '',
  avatar: '',
  isActive: false,
  sessionsUrl: '',
  socialLinks: [
    {
      platform: SocialPlatformEnum.LINKEDIN,
      url: '',
    },
  ],
}

export const useRegisterForm = () => {
  return useForm({
    defaultValues,
    validators: {
      onSubmit: createSpeakerSchema,
    },
    onSubmitMeta: {
      submit: (_: createSpeakerParams) => {},
    },
    onSubmit: async ({ value, meta }) => {
      try {
        await meta.submit(value)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  })
}
