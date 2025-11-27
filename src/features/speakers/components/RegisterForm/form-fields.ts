import type * as z from 'zod'
import type { createSpeakerSchema } from '../../api/create-speaker'
import { SocialPlatformEnum } from '~/lib/types'

export type RegisterFormValues = z.infer<typeof createSpeakerSchema>

export const SocialPlatformAliases = {
  [SocialPlatformEnum.LINKEDIN]: 'LinkedIn',
  [SocialPlatformEnum.TWITTER]: 'Twitter',
  [SocialPlatformEnum.INSTAGRAM]: 'Instagram',
  [SocialPlatformEnum.FACEBOOK]: 'Facebook',
  [SocialPlatformEnum.YOUTUBE]: 'YouTube',
  [SocialPlatformEnum.GITHUB]: 'GitHub',
  [SocialPlatformEnum.TIKTOK]: 'TikTok',
  [SocialPlatformEnum.SPOTIFY]: 'Spotify',
  [SocialPlatformEnum.DISCORD]: 'Discord',
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
