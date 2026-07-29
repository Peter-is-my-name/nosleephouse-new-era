import type { Metadata } from 'next';
import Header from '../../../src/components/Header';
import AparsiaCase from '../../../src/components/cases/AparsiaCase';
import Footer from '../../../src/components/Footer';
import CookieDialog from '../../../src/components/CookieDialog';
import RevealInit from '../../../src/components/RevealInit';

export const metadata: Metadata = {
  title: 'Aparsia: Případová studie',
  description:
    'Vícejazyčný web, admin portál a CRM pro investice do bulharských nemovitostí. Aparsia × nosleephouse™.',
  openGraph: {
    title: 'Aparsia: Případová studie | nosleephouse™',
    description:
      'Web, admin portál a CRM, které otevírají realitní trh světu. Přečtěte si, jak jsme to udělali.',
    images: [{ url: '/assets/reklama/aparsia.png' }],
  },
};

export default function AparsiaPage() {
  return (
    <>
      <Header />
      <main id="top">
        <AparsiaCase />
      </main>
      <Footer />
      <CookieDialog />
      <RevealInit />
    </>
  );
}
