import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/button';
import LightImageSrc from '@/shared/assets/icons/light_theme.svg';
import DarkImageSrc from '@/shared/assets/icons/dark_theme.svg';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {

}

export const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      <Image src={theme === Theme.LIGHT ? LightImageSrc : DarkImageSrc} alt="das" />
    </Button>
  );
};
