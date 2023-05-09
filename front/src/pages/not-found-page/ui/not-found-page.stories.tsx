import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './not-found-page';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['NotFoundPage'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {
    lng: 'en',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
