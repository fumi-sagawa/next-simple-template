import { useAtom } from 'jotai'
import { todoAtom } from '@/components/pages/ToDo/store'

export const useToDoList = () => {
  const [todos] = useAtom(todoAtom)

  return { todos }
}
