// Review API functions
import { apiClient } from '~/api/client';
import type { Review, PaginatedResponse } from '~/types';

export const reviewsApi = {
  // Get reviews for a specific speaker
  getBySpeakerId: async (
    speakerId: string,
    params?: {
      page?: number;
      limit?: number;
    },
  ) => {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.set('page', params.page.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());

    const query = searchParams.toString();
    const endpoint = `/speakers/${speakerId}/reviews${query ? `?${query}` : ''}`;

    return apiClient.get<PaginatedResponse<Review>>(endpoint);
  },

  // Create a new review
  create: async (review: Omit<Review, 'id' | 'createdAt'>) => {
    return apiClient.post<Review>(`/speakers/${review.speakerId}/reviews`, review);
  },

  // Update an existing review
  update: async (id: string, review: Partial<Review>) => {
    return apiClient.put<Review>(`/reviews/${id}`, review);
  },

  // Delete a review
  delete: async (id: string) => {
    return apiClient.delete<void>(`/reviews/${id}`);
  },
};
