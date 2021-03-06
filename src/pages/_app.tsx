import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-900.css';
import '@fontsource/inter/variable-full.css';
import 'normalize.css';
import GlobalStyle from '../components/styled-app';

const title = 'Grant Burry';
const description = 'I make things with computers, and sometimes they work.';
const brandColor = '#FF0000';
const hostname = 'https://grantburry.com';

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
config.autoAddCss = false;

class App extends NextApp {
    render(): JSX.Element {
        const { Component, pageProps }: AppProps = this.props;
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content={brandColor} />
                    {/* PWA web manifest */}
                    <link rel="manifest" href="/site.webmanifest" />
                    {/* Microsoft */}
                    <meta
                        name="msapplication-config"
                        content="/browserconfig.xml"
                    />
                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:url" content={hostname} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta
                        property="og:image"
                        content={`${hostname}/open-graph.png`}
                    />
                    {/* Favicons */}
                    {[16, 32].map((size) => {
                        const dimensions = `${size}x${size}`;
                        return (
                            <link
                                key={size}
                                rel="icon"
                                type="image/png"
                                sizes={dimensions}
                                href={`/favicon-${dimensions}.png`}
                            />
                        );
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
                        color={brandColor}
                    />
                </Head>
                <GlobalStyle />
                <Component {...pageProps} />
            </>
        );
    }
}

export default App;
