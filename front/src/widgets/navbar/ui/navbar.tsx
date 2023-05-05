import { AppLink } from '@/shared/ui/app-link';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className="w-full h-10 bg-inverted flex items-center p-3 h-navbar">
      <div className="flex items-center gap-3 ml-auto">
        <AppLink intent="secondary" href="/">Главная</AppLink>
        <AppLink intent="red" href="/about">О сайте</AppLink>
      </div>
    </div>
  );
};
