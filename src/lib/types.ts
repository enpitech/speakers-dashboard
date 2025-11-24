// Shared types used across the application
import type {
  SocialLink as PrismaSocialLink,
  SocialPlatform as PrismaSocialPlatform,
  Speaker as PrismaSpeaker,
} from '@prisma/client'

export type Option = {
  value: string
  label: string
}

export type Speaker = PrismaSpeaker & {
  socialLinks: SocialLink[]
  topics: Option[]
}

export type SocialLink = PrismaSocialLink

export type SocialPlatform = PrismaSocialPlatform

export enum SocialPlatformEnum {
  LINKEDIN = 'LINKEDIN',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
  YOUTUBE = 'YOUTUBE',
  GITHUB = 'GITHUB',
  TIKTOK = 'TIKTOK',
  SPOTIFY = 'SPOTIFY',
  DISCORD = 'DISCORD',
}
