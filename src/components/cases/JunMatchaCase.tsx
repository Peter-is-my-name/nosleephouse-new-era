import type { Locale } from '@/lib/i18n';
import { getJunMatchaCase } from '@/lib/content/cases';
import StandardCaseStudy from './StandardCaseStudy';

export default function JunMatchaCase({ locale }: { locale: Locale }) {
  return <StandardCaseStudy locale={locale} slug="jun-matcha" data={getJunMatchaCase(locale)} />;
}
