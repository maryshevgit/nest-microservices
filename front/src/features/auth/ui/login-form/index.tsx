import React, { useCallback, useState } from 'react';
import { useTranslation } from '@app/i18n/client';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface LoginFormProps {
  lng: string
}

export const LoginForm = ({ lng }: LoginFormProps) => {
  const { t } = useTranslation(lng);

  const [value, setValue] = useState('');

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Input
        placeholder={t('Введите username')}
        type="text"
        value="dsa"
      />
      <Input
        placeholder={t('Введите password')}
        type="password"
        value={value}
        onChange={onChange}
        autofocus
      />
      <Button className="ml-auto">
        {t('Войти')}
      </Button>
    </div>
  );
};
