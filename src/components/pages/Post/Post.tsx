import Head from 'next/head'
import Link from 'next/link'

export const Post = () => {
  return (
    <div>
      <Head>
        <title>post page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is post page</h1>
      </main>
      <Link href="/">back to top</Link>
    </div>
  )
}
