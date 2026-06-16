import bundleAnalyzer from '@next/bundle-analyzer'
import withSerwistInit from '@serwist/next'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const withSerwist = withSerwistInit({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  // Serwist injects via webpack, so the production build runs `next build
  // --webpack`. It is disabled outside production to keep `next dev`
  // (Turbopack) fast and avoid stale-cache confusion during development.
  disable: process.env.NODE_ENV !== 'production'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serwist adds a webpack config (used by `next build --webpack`). Declaring an
  // empty Turbopack config lets `next dev` run on Turbopack without complaining
  // about the coexisting webpack config.
  turbopack: {},
  compiler: {
    removeConsole: {
      exclude: ['error']
    }
  }
}

export default withBundleAnalyzer(withSerwist(nextConfig))
