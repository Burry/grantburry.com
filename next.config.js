const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextPlugins = [[withBundleAnalyzer], withPWA];

const nextConfig = {
    // next-pwa
    pwa: {
        dest: 'public',
    },
    // webpack
    future: { webpack5: true },
};

module.exports = withPlugins(nextPlugins, nextConfig);
