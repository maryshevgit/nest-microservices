import type {Preview} from '@storybook/react';
import '../src/app/styles/globals.css';
import {ThemeDecorator} from "../src/shared/config/storybook/theme-decorator";
import {Theme} from "../src/shared/const/theme";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [ThemeDecorator(Theme.LIGHT)]

