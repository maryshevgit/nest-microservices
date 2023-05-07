'use client';

import React, { ReactNode } from 'react';
import { cx } from 'class-variance-authority';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface LayoutPageProps {
  children: ReactNode
  lng: string
}

const LayoutPage = ({ children, lng }: LayoutPageProps) => {
  const { theme } = useTheme();

  return (
    <div className={cx(theme, 'text-size_m leading-line_m font-main min-h-screen text-primary bg-color')}>
      <Navbar lng={lng} />
      <div className="flex">
        <Sidebar lng={lng} />
        <main className="flex-1 p-3">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutPage;
