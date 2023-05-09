import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['button'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    intent: 'clear',
    children: 'text',
  },
};

export const ClearDark: Story = {
  args: {
    intent: 'clear',
    children: 'text',
  },
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted: Story = {
  args: {
    intent: 'clear_inverted',
    children: 'text',
  },
};

export const ClearInvertedDark: Story = {
  args: {
    intent: 'clear_inverted',
    children: 'text',
  },
};

ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: {
    intent: 'outline',
    children: 'text',
  },
};

export const OutlineDark: Story = {
  args: {
    intent: 'outline',
    children: 'text',
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineRed: Story = {
  args: {
    intent: 'outline_red',
    children: 'text',
  },
};

export const OutlineRedDark: Story = {
  args: {
    intent: 'outline_red',
    children: 'text',
  },
};

OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
  args: {
    intent: 'background',
    children: 'text',
  },
};

export const BackgroundDark: Story = {
  args: {
    intent: 'background',
    children: 'text',
  },
};

BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted: Story = {
  args: {
    intent: 'background_inverted',
    children: 'text',
  },
};

export const BackgroundInvertedDark: Story = {
  args: {
    intent: 'background_inverted',
    children: 'text',
  },
};

BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
  args: {
    intent: 'disabled',
    children: 'text',
  },
};

export const DisabledDark: Story = {
  args: {
    intent: 'disabled',
    children: 'text',
  },
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
  args: {
    intent: 'square',
    children: 'text',
  },
};

export const SquareDark: Story = {
  args: {
    intent: 'square',
    children: 'text',
  },
};

SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'text',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'text',
  },
};

export const XL: Story = {
  args: {
    size: 'xl',
    children: 'text',
  },
};

export const SquareM: Story = {
  args: {
    intent: 'square',
    size: 'square_m',
    children: 'text',
  },
};

export const SquareL: Story = {
  args: {
    intent: 'square',
    size: 'square_l',
    children: 'text',
  },
};

export const SquareXL: Story = {
  args: {
    intent: 'square',
    size: 'square_xl',
    children: 'text',
  },
};
