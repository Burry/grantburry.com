const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextPlugins = [withBundleAnalyzer, withPWA]

module.exports = () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true,
      removeConsole: {
        exclude: ['error']
      }
    },
    pwa: {
      dest: 'public'
    }
  }

  return nextPlugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}
