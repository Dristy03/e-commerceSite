import '@/styles/globals.css'
import { RecoilRoot } from 'recoil'
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  return (
    <>
    <Head>
    <link rel="icon" type="image/png" href="/woman.png" />
          </Head>
  <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>

    </>
  )
}
