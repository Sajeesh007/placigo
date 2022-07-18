import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <meta charSet="utf-8"/>
            <meta name='application-name' content='Placigo' />
            <meta name="description" content="'Placigo'"/>

            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Dforce' />
            
            <meta name='mobile-web-app-capable' content='yes' />

            <meta name="msapplication-tooltip" content="Dforce"/>
            <meta name="msapplication-starturl" content="/"/>
            <meta name='msapplication-TileColor' content='#2B5797' />
            <meta name='msapplication-tap-highlight' content='no' />

            <meta name='theme-color' content='#000000' />
            <meta name="layoutmode" content="fitscreen/standard"/>

            {/* <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' /> */}
            <link rel='manifest' href='/manifest.json' />
            <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
            <link rel='shortcut icon' href='/favicon.ico' />

            <meta property='og:type' content='webapp' />
            <meta property='og:title' content='Placigo' />
            <meta property='og:description' content='Placigo' />
            <meta property='og:site_name' content='Dforce' />
            {/* <meta property='og:url' content='https://yourdomain.com' />
            <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}