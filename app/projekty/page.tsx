import type { Metadata } from 'next';
import Header from '../../src/components/Header';
import ProjectsPage from '../../src/components/ProjectsPage';
import Footer from '../../src/components/Footer';
import CookieDialog from '../../src/components/CookieDialog';
import RevealInit from '../../src/components/RevealInit';

export const metadata: Metadata = {
  title: 'Naše projekty',
  description:
    'Přes 80 projektů z různých odvětví — weby, e-shopy, branding a vizuální identity. Podívejte se, co umíme.',
  openGraph: {
    title: 'Naše projekty | nosleephouse™',
    description:
      'Přes 80 projektů z různých odvětví — weby, e-shopy, branding a vizuální identity.',
  },
};

export default function ProjektyPage() {
  return (
    <>
      <Header />
      <main id="top">
        <ProjectsPage />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  );
}
