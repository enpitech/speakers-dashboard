import { useState } from 'react';

interface Filters {
  language: string[];
  topic: string[];
  rating: number | null;
}

export function useSpeakersFilters() {
  const [filters, setFilters] = useState<Filters>({
    language: [],
    topic: [],
    rating: null,
  });

  const handleSelectChange = (value: string, type: 'language' | 'topic') => {
    setFilters(prev => ({
      ...prev,
      [type]: [...prev[type], value],
    }));
  };

  const handleRemove = (value: string, type: 'language' | 'topic') => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item !== value),
    }));
  };

  const handleRatingChange = (rating: string) => {
    setFilters(prev => ({
      ...prev,
      rating: rating ? parseInt(rating) : null,
    }));
  };

  return {
    filters,
    handleSelectChange,
    handleRemove,
    handleRatingChange,
  };
}
