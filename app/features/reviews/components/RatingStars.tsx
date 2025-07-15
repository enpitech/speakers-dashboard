import { Star } from 'lucide-react';
import { Text } from './Text';
import { useTranslation } from 'react-i18next';

export const RatingStars = ({ rating, reviewsCount }: { rating: number; reviewsCount: number }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between">
      <Text variant="h2" size="lg">
        {t('reviews.title')}
      </Text>
      <div className="flex items-center gap-2">
        <Text variant="span" size="lg">
          {rating}.0
        </Text>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'fill-primary text-primary' : 'fill-stroke text-stroke'}`}
            />
          ))}
        </div>
        <Text variant="span" size="sm">
          ({reviewsCount} {t('reviews.count')})
        </Text>
      </div>
    </div>
  );
};
