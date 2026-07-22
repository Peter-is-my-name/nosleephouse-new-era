import type { Metadata } from 'next';
import Header from '../../../src/components/Header';
import RealityExpoCase from '../../../src/components/cases/RealityExpoCase';
import Footer from '../../../src/components/Footer';
import CookieDialog from '../../../src/components/CookieDialog';
import RevealInit from '../../../src/components/RevealInit';

export const metadata: Metadata = {
  title: 'Reality EXPO — Případová studie',
  description:
    'Branding, web a digitální kampaň pro největší veletrh nemovitostí v ČR. Weinhold Legal × nosleephouse™.',
  openGraph: {
    title: 'Reality EXPO — Případová studie | nosleephouse™',
    description:
      'Branding, web a digitální kampaň, které rozjely celý veletrh. Přečtěte si, jak jsme to udělali.',
    images: [{ url: '/assets/portfolio/reality-expo.jpg' }],
  },
};

export default function RealityExpoPage() {
  return (
    <>
      <Header />
      <main id="top">
        <RealityExpoCase />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  );
}
