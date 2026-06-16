'use client'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GeistSans } from 'geist/font/sans'
import ErrorView from '@/components/Error'
import '@/styles/globals.css'

// global-error replaces the root layout when it fires, so it renders its own
// <html>/<body> and pulls in the global styles + font itself.
config.autoAddCss = false

export default function GlobalError() {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} font-sans`}>
        <ErrorView statusCode={500} />
      </body>
    </html>
  )
}
