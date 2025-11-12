// Shared types used across the application
import type {
  SocialLink as PrismaSocialLink,
  SocialPlatform as PrismaSocialPlatform,
  SocialPlatform as PrismaSocialPlatformEnum,
  Speaker as PrismaSpeaker,
  Topic as PrismaTopic,
} from '@prisma/client'

export type Speaker = PrismaSpeaker & {
  socialLinks: SocialLink[]
  topics: Topic[]
}

export type Topic = PrismaTopic

export type SocialLink = PrismaSocialLink

export type SocialPlatform = PrismaSocialPlatform

export const SocialPlatformEnum: Record<PrismaSocialPlatformEnum, string> = {
  LINKEDIN: 'LINKEDIN',
  TWITTER: 'TWITTER',
  INSTAGRAM: 'INSTAGRAM',
  FACEBOOK: 'FACEBOOK',
  YOUTUBE: 'YOUTUBE',
  GITHUB: 'GITHUB',
  TIKTOK: 'TIKTOK',
  SPOTIFY: 'SPOTIFY',
  DISCORD: 'DISCORD',
}
