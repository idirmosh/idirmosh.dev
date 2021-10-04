/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

const nextConfig = {
  webpack: (config, options) => {
    if (options.isServer) {
      require('./lib/rss');
    }
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },

  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/floidir',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/floidir',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
