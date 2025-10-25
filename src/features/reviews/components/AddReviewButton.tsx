import { MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';

export const AddReviewButton = () => {
  const { t } = useTranslation();
  return (
    <Button>
      <MessageSquare className="w-4 h-4 mr-2" />
      {t('write.review')}
    </Button>
  );
};
