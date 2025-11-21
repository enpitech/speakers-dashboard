
import { useForm } from '@tanstack/react-form'
import { formSchema } from '../components/RegisterForm/form-fields'
import type { FormValues } from '../components/RegisterForm/form-fields'
import { SocialPlatformEnum } from '~/lib/types'

export const useRegisterForm = () => {
  return useForm({
    defaultValues: {
      name: '',
      location: '',
      experience: '',
      languages: '',
      linkedin: '',
      topics: [] as string[],
      socialLinks: [
        {
          platform: SocialPlatformEnum.LINKEDIN,
          url: '',
        },
      ],
    } as FormValues,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log({ values })
    },
  })
}
