import { Badge } from '~/components/ui/badge';
import { Text } from './Text';

export const SpeakerExpertise = ({ topics }: { topics: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic, index) => (
        <Badge key={index} className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
          <Text variant="span" size="sm">
            {topic}
          </Text>
        </Badge>
      ))}
    </div>
  );
};
