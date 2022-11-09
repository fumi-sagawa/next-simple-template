import Link from 'next/link'

import { Documents } from './components/Documents'
import { Title } from './components/Title'
import styles from './Top.module.scss'

export const Top = () => {
  return (
    <main>
      <div className={styles.container}>
        <Title />
        <Documents />
        <Link href="/todo">✅サンプルアプリ</Link>
      </div>
    </main>
  )
}
