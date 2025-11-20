import { Link } from '@tanstack/react-router'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'
import type { SocialLink } from '~/lib/types'
import { SocialIcon } from '~/ui-core'

interface SocialIconsGroupProps {
  links: SocialLink[]
  className?: string
  iconSize?: 'sm' | 'md' | 'lg'
  maxIcons?: number
  showCount?: boolean
}

export function SocialIconsGroup({
  links = [],
  className = '',
  maxIcons,
  showCount = false,
}: SocialIconsGroupProps) {
  const displayLinks = links
    .slice(0, maxIcons)
    .filter((link) => link.url !== '')
  const remainingIcons = links.slice(maxIcons)
  const remainingCount = remainingIcons.length
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayLinks.map((link, index) => (
        <SocialIconLink key={index} link={link} />
      ))}

      {showCount && remainingCount > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-background-1/10 text-sm font-medium text-text-1">
                <p>+{remainingCount}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent className="p-2 bg-background-1 rounded-md shadow-md">
              <div className="flex flex-wrap gap-2">
                {remainingIcons.map((link, index) => (
                  <SocialIconLink key={index} link={link} />
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
const SocialIconLink = ({ link }: { link: SocialLink }) => {
  return (
    <Link
      to={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-90"
      aria-label={`${link.platform} profile`}
    >
      <SocialIcon platform={link.platform} />
    </Link>
  )
}
