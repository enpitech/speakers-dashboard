import { useNavigate } from '@tanstack/react-router'
import type { Speaker } from '~/types'
import { Avatar ,Text} from '~/components/'
import { SocialIconsGroup } from '~/components/ui/SocialIconsGroup'
import { Row } from '~/components/ui/table/Row'
import { TableCell } from '~/components/ui/table/TableCell'
import { StarRating } from '~/features/reviews/components/StarRating'
import { SessionsButton } from '~/features/sessions/components/SessionsButton'

interface SpeakerRowProps {
  speaker: Speaker
  columnWidths: {
    name: string
    topics: string
    languages: string
    social: string
    information: string
  }
}

export function SpeakerRow({ speaker, columnWidths }: SpeakerRowProps) {
  const navigate = useNavigate()
  return (
    <Row
      onClick={() =>
        navigate({
          to: '/dashboard/speaker/$speakerId',
          params: { speakerId: speaker.id },
        })
      }
      className="cursor-pointer hover:bg-gray-50 transition-colors duration-100 border-b border-gray-100"
    >
      <TableCell width={columnWidths.name}>
        <div className="flex items-center gap-3 min-w-0 py-4">
          <Avatar
            src={speaker.avatar}
            alt={speaker.name}
            size="sm"
            fallback={speaker.name}
          />
          <Text variant="p" className="truncate text-gray-600 font-medium">
            {speaker.name}
          </Text>
        </div>
      </TableCell>

      <TableCell width={columnWidths.topics}>
        <Text
          variant="p"
          className="text-sm text-gray-700 wrap-break-word line-clamp-2"
        >
          {speaker.topics.join(', ')}
        </Text>
      </TableCell>

      <TableCell width={columnWidths.languages}>
        <Text
          variant="p"
          className="text-sm text-gray-600 wrap-break-word line-clamp-2"
        >
          {speaker.languages.join(', ')}
        </Text>
      </TableCell>

      <TableCell width={columnWidths.social}>
        <SocialIconsGroup
          links={speaker.socialLinks}
          maxIcons={6}
          showCount={false}
        />
      </TableCell>

      <TableCell width={columnWidths.information}>
        <div className="flex items-center gap-3 justify-end">
          {speaker.sessionsUrl && <SessionsButton />}
          <StarRating rating={speaker.rating || 0} readonly size="sm" />
        </div>
      </TableCell>
    </Row>
  )
}
