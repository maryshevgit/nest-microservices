import { cva, VariantProps } from 'class-variance-authority';
import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

const linkTheme = cva('link', {
  variants: {
    intent: {
      primary: [
        'text-primary',
      ],
      secondary: [
        'text-inverted_primary',
      ],
      red: [
        'text-red',
      ],
    },
  },
  compoundVariants: [{ intent: 'primary', class: '' }],
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
  href,
  children,
  ...otherProps
}) => {
  return (
    <Link
      href={href}
      className={linkTheme({ intent, className })}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
