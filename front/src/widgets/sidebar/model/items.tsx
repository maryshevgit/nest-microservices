import React, { ReactNode } from 'react';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string
  text: string
  icon: ReactNode
}

export const sidebarItemsList = (lng: string): SidebarItemType[] => ([
  {
    path: `/${lng}`,
    icon: <MainIcon className="fill-inverted_primary" />,
    text: 'home',
  },
  {
    path: `/${lng}/about`,
    icon: <AboutIcon className="fill-inverted_primary" />,
    text: 'about',
  },
  {
    path: `/${lng}/profile`,
    icon: <ProfileIcon className="fill-inverted_primary" />,
    text: 'profile',
  },
]);
