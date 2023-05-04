import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';

const meta: Meta<typeof Logo> = {
  title: 'shared/Logo',
  component: Logo,
  tags: ['logo'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const LogoComponent: Story = {
  args: {},
};
