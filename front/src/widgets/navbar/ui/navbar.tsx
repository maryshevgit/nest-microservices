import { useTranslation } from '@app/i18n/client';
import { AppLink } from '@/shared/ui/app-link';

interface NavbarProps {
  className?: string
  lng: string
}

export const Navbar = ({ className, lng }: NavbarProps) => {
  const { t } = useTranslation(lng, 'navbar');

  return (
    <div className="w-full h-10 bg-inverted flex items-center p-3 h-navbar">
      <div className="flex items-center gap-3 ml-auto">
        <AppLink intent="secondary" href={`/${lng}`}>{t('home')}</AppLink>
        <AppLink intent="red" href={`/${lng}/about`}>{t('about')}</AppLink>
      </div>
    </div>
  );
};
