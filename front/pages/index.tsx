import { MainPage } from '@/pages/main-page';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <main className="mb-8 m-auto">
        <MainPage />
      </main>
    </Layout>
  );
}
