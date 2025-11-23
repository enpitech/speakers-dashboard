import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { formSchema } from '../components/RegisterForm/form-fields'
import type { createSpeakerParams } from '../api/create-speaker'
import type { FormValues } from '../components/RegisterForm/form-fields'
import { SocialPlatformEnum } from '~/lib/types'

const defaultValues = {
  name: '',
  location: '',
  languages: '',
  topics: [] as string[],
  yearsOfExperience: 0,
  email: '',
  phone: '',
  bio: '',
  avatar: '',
  socialLinks: [
    {
      platform: SocialPlatformEnum.LINKEDIN,
      url: '',
    },
  ],
} as FormValues

export const useRegisterForm = () => {
  return useForm({
    defaultValues,
    validators: {
      onSubmit: formSchema,
    },
    onSubmitMeta: {
      submit: (_: createSpeakerParams) => {},
    },
    onSubmit: async ({ value, meta }) => {
      try {
        const speakerData = {
          ...value,
          sessionsUrl: '',
          isActive: false,
        }
        await meta.submit(speakerData)
        toast.success('Speaker registered successfully')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        toast.error('Failed to register speaker')
      }
    },
  })
}
