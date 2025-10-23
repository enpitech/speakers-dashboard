import { Suspense, use } from 'react';
import { Chip } from '~/components/ui/Chip';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { CheckIcon } from 'lucide-react';
import { Spinner } from '~/components/ui/Spinner';
import { Text } from '~/components/ui/Text';
import { useSpeakersFilters } from '~/hooks/useSpeakersFilters';

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
        <Select value="" onValueChange={(value: string) => handleSelectChange('languages', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by language" />
          </SelectTrigger>
          <SelectContent>
            {availableLanguages.map(lang => (
              <SelectItem key={lang} value={lang}>
                {filters.languages.includes(lang) ? <CheckIcon /> : null} {lang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex gap-2 mt-2 flex-wrap">
          {filters.languages.map((lang: string) => (
            <Chip
              key={lang + Math.random()}
              label={lang}
              onRemove={() => handleRemove('languages', lang)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Select value="" onValueChange={(value: string) => handleSelectChange('topics', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by topic" />
          </SelectTrigger>
          <SelectContent>
            {availableTopics.map(topic => (
              <SelectItem key={topic + Math.random()} value={topic}>
                {filters.topics.includes(topic) ? <CheckIcon /> : null} {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2 mt-2 flex-wrap">
          {filters.topics.filter(Boolean).map((topic: string) => (
            <Chip
              key={topic + Math.random()}
              label={topic}
              onRemove={() => handleRemove('topics', topic)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Select value="" onValueChange={(value: string) => handleRatingChange(value === 'null' ? null : parseInt(value))}>
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
              onRemove={() => handleRatingChange(null)}
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
