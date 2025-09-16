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

export interface Review {
  id: string;
  speakerId: string;
  rating: number;
  comment: string;
  text: string; // Alternative property name used in components
  author: string;
  avatar?: string;
  date: string; // Used in components
  createdAt: string;
}

export interface Session {
  id: string;
  title: string;
  description?: string;
  speakerId: string;
  date: string;
  time: string; // Used in components
  location: string; // Used in components
  attendees?: number;
  videoUrl?: string;
  duration?: number;
  scheduledAt?: Date;
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

export interface SocialNetworkOption {
  value: SocialNetwork;
  label: string;
  icon: React.ReactNode;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
