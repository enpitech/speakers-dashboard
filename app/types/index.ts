// Shared types used across the application

export interface Speaker {
  id: string;
  name: string;
  avatar?: string;
  location?: string;
  experience?: string;
  rating?: number;
  sessionsUrl?: string;
  socialLinks?: SocialLink[];
  bio?: string;
  expertise?: string[];
  languages?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Review {
  id: string;
  speakerId: string;
  rating: number;
  comment: string;
  reviewerName: string;
  createdAt: Date;
}

export interface Session {
  id: string;
  title: string;
  description?: string;
  speakerId: string;
  duration?: number;
  scheduledAt?: Date;
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
