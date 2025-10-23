import { en } from './en';
import { he } from './he';

export const resources = {
  en,
  he,
} as const;

export type I18nResource = typeof resources;
