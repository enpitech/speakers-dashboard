import { useState, useCallback } from 'react';

export interface SpeakersFiltersState {
  languages: string[];
  topics: string[];
  rating: number | null;
}

export function useSpeakersFilters() {
  const [filters, setFilters] = useState<SpeakersFiltersState>({
    languages: [],
    topics: [],
    rating: null,
  });

  const handleSelectChange = useCallback((type: 'languages' | 'topics', value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  }, []);

  const handleRemove = useCallback((type: 'languages' | 'topics', value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item !== value)
    }));
  }, []);

  const handleRatingChange = useCallback((rating: number | null) => {
    setFilters(prev => ({
      ...prev,
      rating
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      languages: [],
      topics: [],
      rating: null,
    });
  }, []);

  return {
    filters,
    handleSelectChange,
    handleRemove,
    handleRatingChange,
    clearFilters,
  };
}
