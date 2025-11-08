// Shared types used across the application
import { SocialPlatform as PrismaSocialPlatformEnum } from '@prisma/client';
import type {
  SocialLink as PrismaSocialLink,
  SocialPlatform as PrismaSocialPlatform,
  Speaker as PrismaSpeaker,
} from '@prisma/client';

export type Speaker = PrismaSpeaker & {
  socialLinks: SocialLink[];
};

export type SocialLink = PrismaSocialLink;

export type SocialPlatform = PrismaSocialPlatform;

export const SocialPlatformEnum = PrismaSocialPlatformEnum;