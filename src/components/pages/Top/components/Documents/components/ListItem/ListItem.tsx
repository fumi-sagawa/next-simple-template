import styles from './ListItem.module.scss'

type ListItemProps = {
  link: string
  text: string
}

export const ListItem = (props: ListItemProps) => {
  return (
    <li className={styles.item}>
      <a href={props.link}>{props.text}</a>
    </li>
  )
}
