import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Text } from '~/components/Text';
export const SpeakerPageAboutSkeleton = () => {
  return (
    <div className="md:col-span-1 space-y-6">
      {/* About Card Skeleton */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Text variant="h2" size="lg">
              About
            </Text>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Bio skeleton with multiple lines */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
          </div>
        </CardContent>
      </Card>

      {/* Expertise Card Skeleton */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Text variant="h2" size="lg">
              Expertise
            </Text>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {/* Multiple badge skeletons */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Languages Card Skeleton */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Text variant="h2" size="lg">
              Languages
            </Text>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {/* Language item skeletons */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
