import React, { memo } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/button';
import LightImage from '@/shared/assets/icons/light_theme.svg';
import DarkImage from '@/shared/assets/icons/dark_theme.svg';
import { Theme } from '@/shared/const/theme';

export const ThemeSwitcher = memo(() => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightImage width={40} /> : <DarkImage width={40} />}
    </Button>
  );
});
