const { withContentlayer } = require('next-contentlayer');

const securityHeaders = [
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, options) => {
    if (!options.dev && !options.isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    if (options.isServer) {
      require('./lib/rss');
    }

    config.experiments = {
      topLevelAwait: true,
    };

    return config;
  },
};

module.exports = withContentlayer()(nextConfig);
