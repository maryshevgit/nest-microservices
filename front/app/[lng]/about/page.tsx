import { AboutPage } from '@/pages/about-page';

interface PageProps {
  params: {
    lng: string
  }
}

export default function Page({ params: { lng } }: PageProps) {
  return (
    <AboutPage lng={lng} />
  );
}
