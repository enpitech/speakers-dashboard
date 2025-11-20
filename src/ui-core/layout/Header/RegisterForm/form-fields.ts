import * as z from 'zod'
import { SocialPlatformEnum } from '~/lib/types'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  location: z.string().min(1, 'Location is required'),
  experience: z.string().min(1, 'Experience is required'),
  topics: z.array(z.string()).min(1, 'At least one topic is required'),
  languages: z.string().min(1, 'Languages are required'),
  linkedin: z.string().url('LinkedIn URL is required'),
  socialLinks: z.array(
    z.object({
      platform: z.nativeEnum(SocialPlatformEnum),
      url: z.string(),
    }),
  ),
})

export type FormValues = z.infer<typeof formSchema>

export type SocialPlatform =
  (typeof SocialPlatformEnum)[keyof typeof SocialPlatformEnum]

export const SocialPlatformAliases: Record<SocialPlatform, string> = {
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
] as const
