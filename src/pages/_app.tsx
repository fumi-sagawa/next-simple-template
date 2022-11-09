import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { queryClient } from '@/libs/react-query'
import '../styles/global.scss'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../.mocks')
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.DEV_MODE === 'true' && <ReactQueryDevtools />}
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
