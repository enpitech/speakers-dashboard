import type { Review } from '~/types';
import { Card, CardContent } from '~/components/ui/card';
import { Star } from 'lucide-react';
import { Text } from '~/components';
export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card key={review.id}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.author}
                width={40}
                height={40}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-stroke text-text-2 flex items-center justify-center text-sm font-bold">
                {review.author.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Text variant="h3" size="md">
                {review.author}
              </Text>
              <Text variant="span" size="sm">
                {review.date}
              </Text>
            </div>

            <div className="flex my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'fill-primary  text-secondary' : 'fill-stroke text-stroke'}`}
                />
              ))}
            </div>

            <Text variant="p" size="sm">
              {review.text}
            </Text>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
