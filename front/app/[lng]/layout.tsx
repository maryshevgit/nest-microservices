import { dir } from 'i18next';
import Head from 'next/head';
import { ReactNode } from 'react';
import { languages } from '../i18n/settings';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/globals.css';
import LayoutPage from './layout-page';
import { useTranslation } from '../i18n';
import { ErrorBoundary } from '@/app/providers/error-boundary';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: ReactNode
  params: {
    lng: string
  }
}

export default async function RootLayout({
  children,
  params: {
    lng,
  },
}: RootLayoutProps) {
  const { t } = await useTranslation(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <body>
        <ErrorBoundary lng={lng}>
          <ThemeProvider initialTheme={Theme.LIGHT}>
            <LayoutPage lng={lng}>
              {children}
            </LayoutPage>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
