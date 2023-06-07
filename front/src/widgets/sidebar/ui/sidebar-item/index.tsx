import React from 'react';
import { useTranslation } from '@app/i18n/client';
import { AppLink } from '@/shared/ui/app-link';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  collapsed: boolean
  lng: string
  item: SidebarItemType
}

export const SidebarItem = ({
  collapsed, lng, item,
}: SidebarItemProps) => {
  const { t } = useTranslation(lng, 'navbar');

  return (
    <AppLink
      intent="secondary"
      href={item.path}
      className="flex gap-3"
    >
      {item.icon}
      <span className={collapsed ? 'hidden' : ''}>
        {t(item.text)}
      </span>
    </AppLink>
  );
};
