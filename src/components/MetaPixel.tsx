'use client'
import { useEffect, useState } from 'react';
import Script from 'next/script';
import type { Locale } from '@/lib/i18n';
import { META_PIXEL_ID } from '@/lib/metaPixel';
import { CONSENT_EVENT, hasMarketingConsent } from '@/lib/consent';
import CookieDialog from './CookieDialog';

/** Remove Meta's first-party cookies on every host variant (www / apex). */
function clearMetaCookies() {
  const host = location.hostname.replace(/^www\./, '');
  for (const name of ['_fbp', '_fbc']) {
    for (const domain of ['', `; domain=${host}`, `; domain=.${host}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

/**
 * Cookie banner + Meta Pixel for the paid-traffic landing pages.
 *
 * The Pixel (and its _fbp/_fbc cookies) loads ONLY after the visitor allows
 * marketing cookies (§ 109 ods. 8 zákona č. 452/2021 Z. z., GDPR čl. 6(1)(a)).
 * Without consent the page works normally; Contact/Lead conversions are still
 * reported server-side via the Conversions API (/api/meta-capi).
 * Withdrawing consent revokes the Pixel and deletes its cookies.
 */
export default function MetaPixel({ locale }: { locale: Locale }) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const sync = () => {
      const ok = hasMarketingConsent();
      setGranted(ok);
      if (typeof window.fbq === 'function') window.fbq('consent', ok ? 'grant' : 'revoke');
      if (!ok) clearMetaCookies();
    };
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  return (
    <>
      <CookieDialog locale={locale} />
      {granted && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('consent', 'grant');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
