import { useForm } from '@tanstack/react-form'
import { formSchema } from '../components/RegisterForm/form-fields'

export const useRegisterForm = () => {
  return useForm({
    defaultValues: {
      name: '',
      location: '',
      experience: '',
      languages: '',
      linkedin: '',
      topics: [] as string[],
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log({ values })
    },
  })
}
