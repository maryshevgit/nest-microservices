import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from '.';

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

export const MediumSize: Story = {
  args: {
    size: 'medium',
    href: '/rew',
    children: 'link',
  },
};
