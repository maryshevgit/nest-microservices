import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from '.';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['app-link'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    href: '/urew',
    children: 'link',
  },
};

export const PrimaryDark: Story = {
  args: {
    intent: 'primary',
    href: '/urew',
    children: 'link',
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    href: '/urew',
    children: 'link',
  },
};

export const SecondaryDark: Story = {
  args: {
    intent: 'secondary',
    href: '/urew',
    children: 'link',
  },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red: Story = {
  args: {
    intent: 'red',
    href: '/urew',
    children: 'link',
  },
};

export const RedDark: Story = {
  args: {
    intent: 'red',
    href: '/urew',
    children: 'link',
  },
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)];
