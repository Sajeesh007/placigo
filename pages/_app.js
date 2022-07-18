import Context from '@/store/Context'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return(
    getLayout(
      <Context>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        </Head>
        <Component {...pageProps} />
      </Context>
    )
  )
}