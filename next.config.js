/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    baseUrl: "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
    apiKey: "WCwDGgHrj9SFZsmhgzB2d4nvozkkZwOG",
  },
};

module.exports = nextConfig;
