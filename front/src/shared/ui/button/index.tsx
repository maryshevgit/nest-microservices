import { ButtonHTMLAttributes, FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonTheme = cva('button', {
  variants: {
    intent: {
      clear: [
        'p-0',
        'border-none',
      ],
      clear_inverted: [
        'text-inverted_primary',
      ],
      outline: [
        'p-1',
        'text-primary',
        'border',
        'border-primary',
        'border-solid',
      ],
      outline_red: [
        'p-1',
        'text-red',
        'border',
        'border-red',
        'border-solid',
      ],
      background: [
        'bg-color',
        'text-primary',
      ],
      background_inverted: [
        'bg-inverted',
        'text-inverted_primary',
      ],
      disabled: [
        'opacity-50',
      ],
      square: [
        'p-0',
      ],
      full_width: [
        'w-full',
      ],
    },
    size: {
      medium: ['text-size_m', 'leading-line_m'],
      large: ['text-size_l', 'leading-line_l'],
      xl: ['text-size_xl', 'leading-line_xl'],
      square_m: ['text-size_m', 'w-size_m', 'h-size_m'],
      square_l: ['text-size_l', 'w-size_l', 'h-size_l'],
      square_xl: ['text-size_xl', 'w-size_xl', 'h-size_xl'],
    },
  },
  compoundVariants: [{ intent: 'clear', size: 'medium', class: 'uppercase' }],
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonTheme> {}

export const Button: FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button
      type="button"
      className={buttonTheme({ intent, size, className })}
      {...props}
    />
  );
};
