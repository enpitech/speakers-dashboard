import { Link } from 'react-router';
import type { Speaker } from '~/lib/types';
import { SocialIcon } from './ui/SocialIcon';

type SocialLinksProps = {
  socialLinks: Speaker['socialLinks'];
};

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          className="hover:opacity-80 transition-opacity"
          aria-label={`${link.platform} profile`}
        >
          <SocialIcon platform={link.platform} />
        </Link>
      ))}
    </div>
  );
}
