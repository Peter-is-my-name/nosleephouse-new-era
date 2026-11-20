import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // Branded, localized 404 for unmatched URLs (we have one root layout per locale).
    globalNotFound: true,
  },
  async redirects() {
    return [
      // The old funnel used a dedicated multi-step form page. The new funnel
      // captures leads inline on /reklama, so send any old ad/FAQ links there.
      {
        source: '/reklama/formular',
        destination: '/reklama',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
