import { ProfilePage } from '@/pages/profile-page';

interface PageProps {
  params: {
    lng: string
  }
}

export default function Page({ params: { lng } }: PageProps) {
  return (
    <ProfilePage />
  );
}
