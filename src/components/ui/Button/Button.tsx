import styles from './Button.module.scss'

type Props = {
  children: string
}

export const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>
}
