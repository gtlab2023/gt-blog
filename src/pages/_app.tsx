import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TabBar from '../components/TabBar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <TabBar />
  <Component {...pageProps} />
  </>
}

export default MyApp
