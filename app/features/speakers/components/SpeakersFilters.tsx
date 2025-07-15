import { Suspense, use } from 'react';
import { Chip } from './ui/Chip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckIcon } from 'lucide-react';
import { Spinner } from './Spinner';
import { Text } from './Text';
import { useSpeakersFilters } from '~/lib/hooks/useSpeakersFilters';

type SpeakersFiltersProps = {
  availableFilters: {
    availableLanguages: string[];
    availableTopics: string[];
  };
};

export function SpeakersFilters({ availableFilters }: SpeakersFiltersProps) {
  const { availableLanguages, availableTopics } = availableFilters;

  const { filters, handleSelectChange, handleRemove, handleRatingChange } = useSpeakersFilters();

  return (
    <div className="flex gap-4 mb-4 w-full border border-primary rounded-md p-4 bg-card">
      <div className="flex-1">
        <Select value="" onValueChange={value => handleSelectChange(value, 'language')}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by language" />
          </SelectTrigger>
          <SelectContent>
            {availableLanguages.map(lang => (
              <SelectItem key={lang} value={lang}>
                {filters.language.includes(lang) ? <CheckIcon /> : null} {lang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex gap-2 mt-2 flex-wrap">
          {filters.language.map(lang => (
            <Chip
              key={lang + Math.random()}
              label={lang}
              onRemove={() => handleRemove('language', lang)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Select value="" onValueChange={value => handleSelectChange(value, 'topic')}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by topic" />
          </SelectTrigger>
          <SelectContent>
            {availableTopics.map(topic => (
              <SelectItem key={topic + Math.random()} value={topic}>
                {filters.topic.includes(topic) ? <CheckIcon /> : null} {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2 mt-2 flex-wrap">
          {filters.topic.filter(Boolean).map(topic => (
            <Chip
              key={topic + Math.random()}
              label={topic}
              onRemove={() => handleRemove('topic', topic)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Select value="" onValueChange={value => handleRatingChange(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="null">
              <Text variant="span">All ratings</Text>
            </SelectItem>
            {[5, 4, 3, 2, 1].map(rating => (
              <SelectItem key={rating} value={rating.toString()}>
                {'⭐'.repeat(rating)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2 mt-2 flex-wrap">
          {filters.rating && (
            <Chip
              label={'⭐'.repeat(filters.rating ?? 0)}
              onRemove={() => handleRatingChange('null')}
            />
          )}
        </div>
      </div>
    </div>
  );
}

type SuspendedSpeakersFiltersProps = {
  availableFilters: {
    availableLanguages: Promise<string[]>;
    availableTopics: Promise<string[]>;
  };
};

export function SuspendedSpeakersFilters({ availableFilters }: SuspendedSpeakersFiltersProps) {
  const availableLanguages = use(availableFilters.availableLanguages);
  const availableTopics = use(availableFilters.availableTopics);
  return (
    <Suspense fallback={<Spinner size="lg" />}>
      <SpeakersFilters availableFilters={{ availableLanguages, availableTopics }} />
    </Suspense>
  );
}
