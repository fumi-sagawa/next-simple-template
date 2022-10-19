import type { AppProps } from 'next/app'
import '../styles/global.scss'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../.mocks')
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
