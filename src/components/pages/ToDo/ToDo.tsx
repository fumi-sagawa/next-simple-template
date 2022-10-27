import { ToDoList } from './components/ToDoList'
import styles from './ToDo.module.scss'

export const ToDo = () => {
  return (
    <main>
      <div className={styles.container}>
        <ToDoList />
        <a
          className={styles.reference}
          href="https://reffect.co.jp/react/reack-usestate-to-do-application"
        >
          参考文献
        </a>
      </div>
    </main>
  )
}
