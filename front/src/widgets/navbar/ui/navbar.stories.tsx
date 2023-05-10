import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './navbar';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['Navbar'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

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
