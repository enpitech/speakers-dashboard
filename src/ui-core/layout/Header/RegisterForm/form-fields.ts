import * as z from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  location: z.string().min(1, 'Location is required'),
  experience: z.string().min(1, 'Experience is required'),
  topics: z.array(z.string()).min(1, 'At least one topic is required'),
  languages: z.string().min(1, 'Languages are required'),
  linkedin: z.string().url('LinkedIn URL is required'),
})

export const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
  },

  {
    name: 'location',
    label: 'Location',
    type: 'text',
    placeholder: 'Enter your location',
  },
  {
    name: 'experience',
    label: 'Experience',
    type: 'text',
    placeholder: 'Enter your experience',
  },
  {
    name: 'languages',
    label: 'Languages',
    type: 'text',
    placeholder: 'Enter your languages',
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    type: 'text',
    placeholder: 'Enter your LinkedIn URL',
  },
] as const
