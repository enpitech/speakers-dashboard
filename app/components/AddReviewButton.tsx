import { MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export const AddReviewButton = () => {
  const { t } = useTranslation();
  return (
    <Button>
      <MessageSquare className="w-4 h-4 mr-2" />
      {t('write.review')}
    </Button>
  );
};
