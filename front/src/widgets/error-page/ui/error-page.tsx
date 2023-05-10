import React from 'react';
import { useTranslation } from '@app/i18n/client';
import { Button } from '@/shared/ui/button';

interface ErrorPageProps {
  lng: string
}

export const ErrorPage = ({ lng }: ErrorPageProps) => {
  const { t } = useTranslation(lng);

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-2">
      <h1>
        {t('Непредвиденная ошибка')}
      </h1>
      <Button onClick={reloadPage} intent="outline">
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
