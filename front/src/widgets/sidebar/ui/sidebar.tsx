'use client';

import { cx } from 'class-variance-authority';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from '@app/i18n/client';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { LangSwitcher } from '@/features/lang-switcher';
import { Button } from '@/shared/ui/button';
import { sidebarItemsList } from '../model/items';
import { SidebarItem } from './sidebar-item';

interface SidebarProps {
  lng: string
}

export const Sidebar = memo(({ lng }: SidebarProps) => {
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
        {sidebarItemsList(lng).map((item) => (
          <SidebarItem
            key={item.path}
            collapsed={collapsed}
            lng={lng}
            item={item}
          />
        ))}
      </div>
      <div className="absolute bottom-4 flex items-center justify-center w-full flex-col gap-2">
        <ThemeSwitcher />
        <LangSwitcher lng={lng} short={collapsed} />
      </div>
    </div>
  );
});
