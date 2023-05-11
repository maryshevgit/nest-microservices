'use client';

import { Counter } from '@/entities/counter';

interface AboutPageProps {
  lng: string
}

export const AboutPage = ({ lng }: AboutPageProps) => {
  return (
    <div>
      <Counter />
    </div>
  );
};
