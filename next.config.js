const { withContentlayer } = require('next-contentlayer');

module.exports = {
  reactStrictMode: true,
};

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    //  swcLoader: true,
    // swcMinify: true,
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
