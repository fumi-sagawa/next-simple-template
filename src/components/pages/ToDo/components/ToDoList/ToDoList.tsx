import { Input } from './components/Input'
import { List } from './components/List'
import { useToDoList } from './useToDoList'
import styles from './ToDoList.module.scss'

export const ToDoList = () => {
  const { todos } = useToDoList()

  return (
    <div>
      <h1>ToDo List</h1>
      <Input />
      <List />
    </div>
  )
}
