// Shared types used across the application

export type SocialNetwork = 
  | 'linkedin'
  | 'twitter'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'github'
  | 'tiktok'
  | 'spotify'
  | 'discord';

export interface SocialLink {
  platform: SocialNetwork;
  url: string;
  icon?: string;
}

export interface Speaker {
  id: string;
  name: string;
  avatar?: string;
  location?: string;
  experience?: string;
  rating?: number;
  sessionsUrl?: string;
  socialLinks: SocialLink[];
  bio?: string;
  topics: string[];
  languages: string[];
}





export interface SpeakerFormData {
  name: string;
  avatar?: string;
  topics: string[];
  languages: string[];
  sessionsUrl: string;
  socialLinks: SocialLink[];
  bio?: string;
  location?: string;
  experience?: string;
}

