import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Poke GSheets</title>
      <meta name="description" content="A Pokemon DB that uses Google Sheets Query" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Navbar list={pageProps.list}/>
    <Component {...pageProps} />
  </>
}

export default MyApp
