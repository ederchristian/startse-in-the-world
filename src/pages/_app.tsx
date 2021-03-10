import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StartSe in the World</title>
        <meta
          name="description"
          content="StartSe - We are a business school for anyone who wants to transform their future today. Present in Brazil, USA, China, Israel, Portugal, and India."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://startse-landings.s3.us-east-2.amazonaws.com/favicons/new-brand/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://startse-landings.s3.us-east-2.amazonaws.com/favicons/new-brand/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://startse-landings.s3.us-east-2.amazonaws.com/favicons/new-brand/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://startse-landings.s3.us-east-2.amazonaws.com/favicons/new-brand/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://startse-landings.s3.us-east-2.amazonaws.com/favicons/new-brand/safari-pinned-tab.svg"
          color="#777777"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
