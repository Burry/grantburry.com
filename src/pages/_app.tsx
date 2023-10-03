import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'normalize.css'
import { theme, inter } from '@/styles/theme'
import { GlobalStyle } from '@/components/styled-app'

const title = 'Grant Burry'
const description = 'I make things with computers, and sometimes they work.'
const hostname = 'https://grantburry.com'

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colors.primary} />
        {/* PWA web manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Microsoft */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={hostname} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={`${hostname}/open-graph.png`} />
        {/* Favicons */}
        {[16, 32].map(size => {
          const dimensions = `${size}x${size}`
          return (
            <link
              key={size}
              rel="icon"
              type="image/png"
              sizes={dimensions}
              href={`/favicon-${dimensions}.png`}
            />
          )
        })}
        {/* Apple */}
        <link
          rel="apple-touch-icon"
          sizes="300x300"
          href="/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.colors.primary}
        />
      </Head>
      <GlobalStyle />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
