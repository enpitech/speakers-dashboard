import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';

type RegisterSpeakerButtonProps = {
  onClick?: () => void;
};

export function RegisterSpeakerButton({ onClick }: RegisterSpeakerButtonProps) {
  const { t } = useTranslation();
  return <Button onClick={onClick}>{t('register.as.speaker')}</Button>;
}
