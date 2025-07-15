// Speaker API functions
import { apiClient } from '~/api/client';
import type { Speaker, PaginatedResponse } from '~/types';

export const speakersApi = {
  // Get all speakers with optional filtering
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    expertise?: string[];
  }) => {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.search) searchParams.set('search', params.search);
    if (params?.expertise) searchParams.set('expertise', params.expertise.join(','));

    const query = searchParams.toString();
    const endpoint = `/speakers${query ? `?${query}` : ''}`;

    return apiClient.get<PaginatedResponse<Speaker>>(endpoint);
  },

  // Get a speaker by ID
  getById: async (id: string) => {
    return apiClient.get<Speaker>(`/speakers/${id}`);
  },

  // Create a new speaker
  create: async (speaker: Omit<Speaker, 'id'>) => {
    return apiClient.post<Speaker>('/speakers', speaker);
  },

  // Update an existing speaker
  update: async (id: string, speaker: Partial<Speaker>) => {
    return apiClient.put<Speaker>(`/speakers/${id}`, speaker);
  },

  // Delete a speaker
  delete: async (id: string) => {
    return apiClient.delete<void>(`/speakers/${id}`);
  },
};
