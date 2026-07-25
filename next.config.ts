import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
