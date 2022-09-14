import Context from '@/store/Context'
import NextProgress from 'next-progress'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return(
    <Context>
      {getLayout(
        <>
          <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
          </Head>
          <NextProgress color="#4f46e5" height="4px" delay={300} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </>
    )}
      </Context>
  )
}