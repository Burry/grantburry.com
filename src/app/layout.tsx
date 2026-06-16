import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GeistSans } from 'geist/font/sans'
import '@/styles/globals.css'

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false

const title = 'Grant Burry'
const description = 'I make things with computers, and sometimes they work.'
const hostname = 'https://grantburry.com'

export const metadata: Metadata = {
  metadataBase: new URL(hostname),
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    url: hostname,
    images: [{ url: '/open-graph.png', width: 1200, height: 630 }]
  },
  other: { 'msapplication-config': '/browserconfig.xml' }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#FF0000'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
