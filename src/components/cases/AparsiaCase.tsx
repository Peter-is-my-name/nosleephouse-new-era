import type { Locale } from '@/lib/i18n';
import { getAparsiaCase } from '@/lib/content/cases';
import StandardCaseStudy from './StandardCaseStudy';

export default function AparsiaCase({ locale }: { locale: Locale }) {
  return <StandardCaseStudy locale={locale} slug="aparsia" data={getAparsiaCase(locale)} />;
}
