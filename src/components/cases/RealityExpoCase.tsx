import type { Locale } from '@/lib/i18n';
import { getRealityExpoCase } from '@/lib/content/cases';
import StandardCaseStudy from './StandardCaseStudy';

export default function RealityExpoCase({ locale }: { locale: Locale }) {
  return <StandardCaseStudy locale={locale} slug="reality-expo" data={getRealityExpoCase(locale)} />;
}
