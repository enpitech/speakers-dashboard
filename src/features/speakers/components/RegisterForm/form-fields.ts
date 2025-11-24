import * as z from 'zod'
import { SocialPlatform as PrismaSocialPlatformEnum } from '@prisma/client'
import { createSpeakerSchema } from '../../api/create-speaker'

export type RegisterFormValues = z.infer<typeof createSpeakerSchema>

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
