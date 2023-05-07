import { MainPage } from '@/pages/main-page';

interface PageProps {
  params: {
    lng: string
  }
}

export default function Page({ params: { lng } }: PageProps) {
  return (
    <MainPage />
  );
}
