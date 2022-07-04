import styles from './Input.module.scss'

type InputProps = {
  value: string
  onChange: (value: string) => void
}

export const Input = (props: InputProps) => {
  return <input type="text" value={props.value} onChange={(event) => props.onChange(event.target.value)} />
}
