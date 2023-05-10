import type { Meta, StoryObj } from '@storybook/react';

import { ErrorPage } from './error-page';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ErrorPage> = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  tags: ['ErrorPage'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Ru: Story = {
  args: {
    lng: 'ru',
  },
};

export const RuDark: Story = {
  args: {
    lng: 'ru',
  },
};

RuDark.decorators = [ThemeDecorator(Theme.DARK)];

export const En: Story = {
  args: {
    lng: 'en',
  },
};

export const EnDark: Story = {
  args: {
    lng: 'en',
  },
};

EnDark.decorators = [ThemeDecorator(Theme.DARK)];
