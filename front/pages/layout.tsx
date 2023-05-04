import { ReactNode } from 'react';
import { cx } from 'class-variance-authority';
import { useTheme } from '../src/app/providers/theme-provider';

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={cx(theme, 'text-size_m leading-line_m font-main min-h-screen text-primary bg-color')}>
      <button onClick={toggleTheme}>
        toggle
      </button>
      <main>{children}</main>
    </div>
  );
}