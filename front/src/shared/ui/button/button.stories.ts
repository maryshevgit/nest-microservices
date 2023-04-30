import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['button'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'text',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'text',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'text',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'text',
  },
};
