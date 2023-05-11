'use client';

import { cx } from 'class-variance-authority';
import React, { useCallback, useState } from 'react';
import { useTranslation } from '@app/i18n/client';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { LangSwitcher } from '@/features/lang-switcher';
import { Button } from '@/shared/ui/button';
import { AppLink } from '@/shared/ui/app-link';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';

interface SidebarProps {
  lng: string
}

export const Sidebar = ({ lng }: SidebarProps) => {
  const { t } = useTranslation(lng, 'navbar');

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      data-testid="sidebar-test"
      className={cx(
        'h-[calc(100vh-50px)] w-1/5 bg-inverted relative transition-width text-primary',
        `${collapsed ? 'w-sidebar_collapsed' : 'w-sidebar'}`,
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        intent="background_inverted"
        size="square_l"
        className="absolute -right-8 bottom-7"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className="flex flex-col gap-4 mt-4 items-center">
        <AppLink
          intent="secondary"
          href={`/${lng}`}
          className="flex gap-3"
        >
          <MainIcon className="fill-inverted_primary" />
          <span className={collapsed ? 'hidden' : ''}>
            {t('home')}
          </span>
        </AppLink>

        <AppLink
          intent="secondary"
          href={`/${lng}/about`}
          className="flex gap-3"
        >
          <AboutIcon className="fill-inverted_primary" />
          <span className={collapsed ? 'hidden' : ''}>
            {t('about')}
          </span>
        </AppLink>
      </div>
      <div className="absolute bottom-4 flex items-center justify-center w-full flex-col gap-2">
        <ThemeSwitcher />
        <LangSwitcher lng={lng} short={collapsed} />
      </div>
    </div>
  );
};
