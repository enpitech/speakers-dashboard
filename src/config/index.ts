// Application configuration and environment variables

export const config = {
  app: {
    name: 'Frontend Istanbul Speakers Board',
    description: 'A platform for managing and discovering speakers for frontend events',
    version: '1.0.0',
  },
  api: {
    baseUrl: process.env.API_BASE_URL || '/api',
    timeout: 10000,
  },
  features: {
    enableReviews: true,
    enableSessions: true,
    enableSpeakerRegistration: true,
  },
  ui: {
    defaultPageSize: 20,
    maxImageSize: 5 * 1024 * 1024, // 5MB
  },
} as const;

export type Config = typeof config;
