import type { Metadata } from 'next';
import Header from '../../../src/components/Header';
import JunMatchaCase from '../../../src/components/cases/JunMatchaCase';
import Footer from '../../../src/components/Footer';
import CookieDialog from '../../../src/components/CookieDialog';
import RevealInit from '../../../src/components/RevealInit';

export const metadata: Metadata = {
  title: 'JUN Matcha: Případová studie',
  description:
    'Kompletní vizuální identita pro specialty matcha bar JUN v Praze. Logo, brand systém, obaly a Instagram. JUN × nosleephouse™.',
  openGraph: {
    title: 'JUN Matcha: Případová studie | nosleephouse™',
    description:
      'Silná značka prémiové matchy postavená od nuly. Logo, obaly, Instagram. Přečtěte si, jak jsme to udělali.',
    images: [{ url: '/assets/reklama/junmatcha.png' }],
  },
};

export default function JunMatchaPage() {
  return (
    <>
      <Header />
      <main id="top">
        <JunMatchaCase />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  );
}
