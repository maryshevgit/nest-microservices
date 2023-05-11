'use client';

import React, { ReactNode, Suspense } from 'react';
import { cx } from 'class-variance-authority';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface LayoutPageProps {
  children: ReactNode
  lng: string
}

const LayoutPage = ({ children, lng }: LayoutPageProps) => {
  const { theme } = useTheme();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={cx(theme, 'text-size_m leading-line_m font-main min-h-screen text-primary bg-color')}>
        <Navbar lng={lng} />
        <div className="flex">
          <Sidebar lng={lng} />
          <Suspense fallback={<div>loading</div>}>
            <main className="flex-1 p-3">
              {children}
            </main>
          </Suspense>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default LayoutPage;
