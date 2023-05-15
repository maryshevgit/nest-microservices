import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['Input'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: 'Type text',
    value: 'test value',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Type text',
    value: 'test value',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
