/** @type {import('next').NextConfig} */

const APIURL = "http://dgu-bamboo.site";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // image url test로 추가 나중에 삭제해주세요
  images: {
    domains: ['play-lh.googleusercontent.com', 'www.instagram.com'],
  },

  async redirects() {
    return [
      // bamboo insta 연결 url
      {
        source: "/dgu-bamboo-home",
        destination:
          "https://www.instagram.com/dgu_bamboo/?igshid=NTc4MTIwNjQ2YQ%3D%3D",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // 제보하기 API
      {
        source: "/suggestion",
        destination: `${APIURL}/api/reports`,
      },
    ];
  },
};

module.exports = nextConfig;
