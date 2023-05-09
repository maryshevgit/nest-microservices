// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/theme-provider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`${theme} text-size_m leading-line_m font-main min-h-screen text-primary bg-color`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
