import { useAtom } from 'jotai'
import { todoAtom } from '@/components/pages/ToDo/store'

export const useList = () => {
  const [todos, setTodos] = useAtom(todoAtom)

  const handleRemoveTask = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleUpdateTask = (index: number) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted
      }

      return todo
    })
    setTodos(newTodos)
  }

  return { todos, handleRemoveTask, handleUpdateTask }
}
