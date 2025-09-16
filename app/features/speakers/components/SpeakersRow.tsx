import { Avatar } from '~/components/Avatar';
import { StarRating } from '~/features/reviews/components/StarRating';
import { Row } from '~/components/ui/table/Row';
import { TableCell } from '~/components/ui/table/TableCell';
import { SocialIconsGroup } from '~/components/ui/SocialIconsGroup';
import type { Speaker } from '~/types';
import { useNavigate } from 'react-router';
import { Text } from '~/components/Text';
import { SessionsButton } from '~/features/sessions/components/SessionsButton';

interface SpeakerRowProps {
  speaker: Speaker;
  columnWidths: {
    name: string;
    topics: string;
    languages: string;
    social: string;
    information: string;
  };
}

export function SpeakerRow({ speaker, columnWidths }: SpeakerRowProps) {
  const navigate = useNavigate();
  return (
    <Row
      onClick={() => navigate(`/speakers/${speaker.id}/sessions`)}
      className="cursor-pointer hover:bg-background-2 transition-colors duration-100"
    >
      <TableCell width={columnWidths.name}>
        <div className="flex items-center gap-3 min-w-0">
          <Avatar src={speaker.avatar} alt={speaker.name} size="sm" fallback={speaker.name} />
          <Text variant="p" className=" truncate ">
            {speaker.name}
          </Text>
        </div>
      </TableCell>

      <TableCell width={columnWidths.topics}>
        <Text variant="p" className="text-sm text-[var(--color-mint-500)] break-words line-clamp-2">
          {speaker.topics.join(', ')}
        </Text>
      </TableCell>

      <TableCell width={columnWidths.languages}>
        <Text variant="p" className="text-sm text-[var(--color-text-400)] break-words line-clamp-2">
          {speaker.languages.join(', ')}
        </Text>
      </TableCell>

      <TableCell width={columnWidths.social}>
        <SocialIconsGroup links={speaker.socialLinks} maxIcons={5} showCount={true} />
      </TableCell>

      <TableCell width={columnWidths.information}>
        <div className="flex items-center gap-3">
          <StarRating rating={speaker.rating || 0} readonly size="sm" />
          {speaker.sessionsUrl && <SessionsButton />}
        </div>
      </TableCell>
    </Row>
  );
}
