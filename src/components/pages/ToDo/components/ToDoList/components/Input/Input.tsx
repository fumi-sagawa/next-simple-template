import { useInput } from './useInput'
import styles from './Input.module.scss'

export const Input = () => {
  const { newTask, handleAddNewTask, handleSubmit } = useInput()

  return (
    <form onSubmit={handleSubmit}>
      Add Task : <input value={newTask} placeholder="Add New Task" onChange={handleAddNewTask} />
    </form>
  )
}
