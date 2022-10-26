import { Input } from './components/Input'
import { List } from './components/List'
import { useToDoList } from './useToDoList'

export const ToDoList = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <Input />
      <List />
    </div>
  )
}
