import { useTranslation } from '@app/i18n/client';
import React, {
  useCallback, useState,
} from 'react';
import { Button } from '@/shared/ui/button';
import { LoginModal } from '@/features/auth';

interface NavbarProps {
  lng: string
}

export const Navbar = ({ lng }: NavbarProps) => {
  const { t } = useTranslation(lng, 'navbar');

  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="w-full h-10 bg-inverted flex items-center p-3 h-navbar flex items-center gap-3">
      <Button
        intent="clear_inverted"
        className="ml-auto"
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        lng={lng}
        isOpen={isOpen}
        onClose={onCloseModal}
      />
    </div>
  );
};
