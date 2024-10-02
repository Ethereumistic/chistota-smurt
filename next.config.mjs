/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'nostr.build',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'credissimo.bg',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.easypay.bg',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'v-pomosht-na-zavisimite.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cashcredit.bg',
        port: '',
      },
    ],
  },

};

export default nextConfig;
