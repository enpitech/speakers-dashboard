import { Text } from '~/components/Text';
import { PhoneMissedIcon } from 'lucide-react';

export const EmptyResponseView = ({
  message,
  cta,
  icon = <PhoneMissedIcon className="size-4" />,
}: {
  message: string;
  cta?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="text-center bg-secondary p-4 rounded-lg flex flex-col items-center gap-4">
      <div className="text-4xl">
        <Text variant="h3" className="text-primary">
          {icon}
        </Text>
      </div>
      <Text variant="p" size="lg">
        {message}
      </Text>
      {cta && cta}
    </div>
  );
};
