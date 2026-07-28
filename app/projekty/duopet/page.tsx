import type { Metadata } from 'next';
import Header from '../../../src/components/Header';
import DuopetCase from '../../../src/components/cases/DuopetCase';
import Footer from '../../../src/components/Footer';
import CookieDialog from '../../../src/components/CookieDialog';
import RevealInit from '../../../src/components/RevealInit';

export const metadata: Metadata = {
  title: 'DUOPET: Případová studie',
  description:
    'Web, dashboard a AI aplikace pro certifikovaného zpracovatele plastů DUOPET. Organická návštěvnost se do 3 měsíců zdvojnásobila. DUOPET × nosleephouse™.',
  openGraph: {
    title: 'DUOPET: Případová studie | nosleephouse™',
    description:
      'Web, který přivádí zakázky, plus dashboard a AI nástroje pro interní procesy. Přečtěte si, jak jsme to udělali.',
    images: [{ url: '/assets/reklama/duopetcz.jpeg' }],
  },
};

export default function DuopetPage() {
  return (
    <>
      <Header />
      <main id="top">
        <DuopetCase />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  );
}
