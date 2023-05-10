import React from 'react';
import { useTranslation } from '@app/i18n/client';
import { languages } from '@app/i18n/settings';
import { AppLink } from '@/shared/ui/app-link';

interface LangSwitcherProps {
  lng: string
  short: boolean
}

export const LangSwitcher = ({ lng, short }: LangSwitcherProps) => {
  const { t } = useTranslation(lng, 'sidebar');

  return (
    <>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <AppLink href={`/${l}`}>
              {t(short ? 'short_lang' : 'full_lang')}
            </AppLink>
          </span>
        );
      })}
    </>
  );
};
