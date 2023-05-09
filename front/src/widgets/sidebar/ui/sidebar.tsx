'use client';

import { cx } from 'class-variance-authority';
import React, { useCallback, useState } from 'react';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { LangSwitcher } from '@/features/lang-switcher';
import { Button } from '@/shared/ui/button';

interface SidebarProps {
  lng: string
}

export const Sidebar = ({ lng }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      data-testid="sidebar"
      className={cx(
        'h-[calc(100vh-50px)] w-1/5 bg-inverted relative transition-width',
        `${collapsed ? 'w-sidebar_collapsed' : 'w-sidebar'}`,
      )}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
      <div className="absolute bottom-4 flex items-center justify-center w-full flex-col gap-2">
        <ThemeSwitcher />
        <LangSwitcher lng={lng} short={collapsed} />
      </div>
    </div>
  );
};
