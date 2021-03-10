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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
