import { FC, ReactNode } from 'react';

interface LayoutWithHeaderProps {
  children: ReactNode
}

export const LayoutWithHeader: FC<LayoutWithHeaderProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};
