import * as z from 'zod'
import { SocialPlatform as PrismaSocialPlatformEnum } from '@prisma/client'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z
    .string()
    .regex(/^\d{3}-\d{7}$/, 'Phone must be in the format XXX-XXXXXXX'),
  location: z.string().min(1, 'Location is required'),
  topics: z.array(z.string()).min(1, 'At least one topic is required'),
  languages: z.string().min(1, 'Languages are required'),
  yearsOfExperience: z.number().min(0, 'Years of experience must be a number'),
  socialLinks: z.array(
    z.object({
      platform: z.nativeEnum(PrismaSocialPlatformEnum),
      url: z.string().url('URL is required'),
    }),
  ),
})

export type FormValues = z.infer<typeof formSchema>

export type SocialPlatform =
  (typeof PrismaSocialPlatformEnum)[keyof typeof PrismaSocialPlatformEnum]

export const SocialPlatformAliases: Record<SocialPlatform, string> = {
  [PrismaSocialPlatformEnum.LINKEDIN]: 'LinkedIn',
  [PrismaSocialPlatformEnum.TWITTER]: 'Twitter',
  [PrismaSocialPlatformEnum.INSTAGRAM]: 'Instagram',
  [PrismaSocialPlatformEnum.FACEBOOK]: 'Facebook',
  [PrismaSocialPlatformEnum.YOUTUBE]: 'YouTube',
  [PrismaSocialPlatformEnum.GITHUB]: 'GitHub',
  [PrismaSocialPlatformEnum.TIKTOK]: 'TikTok',
  [PrismaSocialPlatformEnum.SPOTIFY]: 'Spotify',
  [PrismaSocialPlatformEnum.DISCORD]: 'Discord',
}

export const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: 'Enter your phone',
  },
  {
    name: 'location',
    label: 'Location',
    type: 'text',
    placeholder: 'Enter your location',
  },
  {
    name: 'languages',
    label: 'Languages',
    type: 'text',
    placeholder: 'Enter your languages',
  },
  {
    name: 'yearsOfExperience',
    label: 'Years of Experience',
    type: 'number',
    placeholder: 'Enter your years of experience',
  },
] as const
