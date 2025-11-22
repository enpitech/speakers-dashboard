import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { formSchema } from '../components/RegisterForm/form-fields'
import { useCreateSpeaker } from '../api/create-speaker'
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
  socialLinks: [
    {
      platform: SocialPlatformEnum.LINKEDIN,
      url: '',
    },
  ],
} as FormValues

export const useRegisterForm = (onSuccess: () => void) => {
  const createSpeaker = useCreateSpeaker()
  return useForm({
    defaultValues,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const speakerData = {
          ...value,
          avatar: '',
          sessionsUrl: '',
          bio: '',
          isActive: false,
        }
        await createSpeaker.mutateAsync(speakerData)
        toast.success('Speaker registered successfully')
        onSuccess()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        toast.error('Failed to register speaker')
      }
    },
  })
}
