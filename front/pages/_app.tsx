import '@/app/styles/globals.css';
import type { AppProps } from 'next/app';
import { Theme, ThemeProvider } from '@/app/providers/theme-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme={Theme.LIGHT}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
