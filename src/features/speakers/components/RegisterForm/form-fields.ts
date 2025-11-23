import * as z from 'zod'
import { SocialPlatform as PrismaSocialPlatformEnum } from '@prisma/client'

export const formSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  avatar: z.string().url('Invalid URL'),
  bio: z.string().min(1, 'Required'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must contain exactly 10 digits'),
  location: z.string().min(1, 'Required'),
  topics: z.array(z.string()).min(1, 'At least one topic is required'),
  languages: z.string().min(1, 'Required'),
  yearsOfExperience: z.number().min(0),
  socialLinks: z.array(
    z.object({
      platform: z.nativeEnum(PrismaSocialPlatformEnum),
      url: z.string().url('Invalid URL'),
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

export const baseFormFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: 'Enter phone',
  },
  {
    name: 'location',
    label: 'Location',
    type: 'text',
    placeholder: 'Enter location',
  },
  {
    name: 'languages',
    label: 'Languages',
    type: 'text',
    placeholder: 'Enter languages',
  },
  {
    name: 'yearsOfExperience',
    label: 'Years of Experience',
    type: 'number',
    placeholder: 'Enter years',
  },
  {
    name: 'avatar',
    label: 'Image URL',
    type: 'url',
    placeholder: 'Enter URL',
  },
] as const
