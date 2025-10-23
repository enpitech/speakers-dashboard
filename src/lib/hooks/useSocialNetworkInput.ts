import { useState, useRef, useEffect } from 'react';
import type { SocialLink, SocialNetwork, SocialNetworkOption } from '~/lib/types';

export const socialNetworks: SocialNetworkOption[] = [
  { value: 'linkedin' as const, label: 'LinkedIn', icon: '🔗' },
  { value: 'twitter' as const, label: 'Twitter', icon: '🐦' },
  { value: 'github' as const, label: 'GitHub', icon: '🐙' },
  { value: 'instagram' as const, label: 'Instagram', icon: '📸' },
  { value: 'youtube' as const, label: 'YouTube', icon: '📺' },
  { value: 'facebook' as const, label: 'Facebook', icon: '📘' },
];

export function useSocialNetworks(value: SocialLink, onChange: (value: SocialLink) => void) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedNetwork = socialNetworks.find(n => n.value === value.platform) || socialNetworks[0];
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleNetworkChange = (network: SocialNetwork) => {
    onChange({ ...value, platform: network });
    setIsOpen(false);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, url: event.target.value });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return {
    isOpen,
    selectedNetwork,
    toggleDropdown,
    handleNetworkChange,
    handleUrlChange,
    dropdownRef,
    buttonRef,
  };
}
