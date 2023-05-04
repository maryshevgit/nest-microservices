import { cva, VariantProps } from 'class-variance-authority';
import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

const linkTheme = cva('link', {
  variants: {
    intent: {
      primary: [
        'text-white',
        'cursor-pointer',
        'hover:text-amber-100',
      ],
    },
    size: {
      medium: ['text-xl'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
});

interface AppLinkProps {
  className?: string
  href: string
  children: ReactNode
}

export interface LinkProps extends AppLinkProps, VariantProps<typeof linkTheme> {}

export const AppLink: FC<LinkProps> = ({
  className,
  intent,
  size,
  href,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={linkTheme({ intent, size, className })}
    >
      {children}
    </Link>
  );
};
