import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['Sidebar'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

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
