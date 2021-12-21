const { withContentlayer } = require('next-contentlayer');

const securityHeaders = [
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

const nextConfig = {
  rewrites: async () => [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
  ],
  images: {
    domains: ['pbs.twimg.com', 'localhost'],
  },
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

    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};

module.exports = withContentlayer()(nextConfig);
