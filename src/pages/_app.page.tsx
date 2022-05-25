import 'nprogress/nprogress.css'

import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { useEffect } from 'react'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  return <Component {...pageProps} />
}

export default MyApp
