import { useTranslation } from '@app/i18n/client';
import React, {
  useCallback, useRef, useState,
} from 'react';
import { Modal } from '@/shared/ui/modal';
import { Button } from '@/shared/ui/button';

interface NavbarProps {
  className?: string
  lng: string
}

export const Navbar = ({ className, lng }: NavbarProps) => {
  const { t } = useTranslation(lng, 'navbar');
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="w-full h-10 bg-inverted flex items-center p-3 h-navbar">
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        dasdas
      </Modal>
      <div id="random" className="flex items-center gap-3 ml-auto">
        <Button intent="clear_inverted" onClick={onToggleModal}>
          {t('Войти')}
        </Button>
        {/* <AppLink intent="secondary" href={`/${lng}`}>{t('home')}</AppLink> */}
        {/* <AppLink intent="red" href={`/${lng}/about`}>{t('about')}</AppLink> */}
      </div>
    </div>
  );
};
