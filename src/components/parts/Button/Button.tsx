import styles from './Button.module.scss'

type ButtonProps = {
  handleClick: () => void
  text: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
