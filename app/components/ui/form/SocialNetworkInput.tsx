import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { cn } from '~/lib/utils';
import type { SocialLink, SocialNetworkOption } from '~/lib/types';
import { socialNetworks, useSocialNetworks } from '~/lib/hooks/useSocialNetworkInput';

type SocialNetworkInputProps = {
  value: SocialLink;
  onChange: (value: SocialLink) => void;
  className?: string;
};

export function SocialNetworkInput({ value, onChange, className }: SocialNetworkInputProps) {
  const {
    isOpen,
    selectedNetwork,
    toggleDropdown,
    handleNetworkChange,
    handleUrlChange,
    dropdownRef,
    buttonRef,
  } = useSocialNetworks(value, onChange);

  const { t } = useTranslation();
  return (
    <div className={cn('flex w-full flex-col gap-2 sm:flex-row', className)}>
      <div className="relative min-w-[120px]">
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleDropdown}
          className="flex w-full items-center justify-between rounded-md border border-stroke bg-background-2 px-3 py-2 text-left text-sm text-text-2 transition-colors hover:border-dark-base"
        >
          <div className="flex items-center gap-2">
            {selectedNetwork.icon}
            <span>{selectedNetwork.label}</span>
          </div>
          <ChevronDown
            size={16}
            className={cn('transition-transform', isOpen ? 'rotate-180' : '')}
          />
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-50 mt-1 overflow-y-auto rounded-md border border-stroke bg-white py-1 shadow-lg"
            style={{
              top: '100%',
              left: 0,
              width: '100%',
              maxHeight: '320px',
            }}
          >
            {socialNetworks.map((network: SocialNetworkOption) => (
              <button
                key={network.value}
                type="button"
                onClick={() => handleNetworkChange(network.value)}
                className={cn(
                  'flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-background-1/30',
                  network.value === value.platform ? 'bg-background-1/20' : '',
                )}
              >
                {network.icon}
                <span>{network.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <input
        type="text"
        value={value.url}
        onChange={handleUrlChange}
        placeholder={`${t('speaker.form.social.url.placeholder')}`}
        className="flex-grow rounded-md border border-stroke bg-background-2 px-3 py-2 text-sm text-text-2 outline-none transition-colors placeholder:text-text-1 hover:border-dark-base focus:border-primary"
      />
    </div>
  );
}
