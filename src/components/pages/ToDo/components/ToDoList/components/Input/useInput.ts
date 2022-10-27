import type { FormEvent } from 'react'
import { useAtom } from 'jotai'
import { inputAtom, todoAtom } from '@/components/pages/ToDo/store'

export const useInput = () => {
  const [newTask, setTask] = useAtom(inputAtom)
  const [_, setTodos] = useAtom(todoAtom)

  const handleAddNewTask = (event: FormEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newTask === '') return
    setTodos((todos) => [...todos, { task: newTask, isCompleted: false }])
    setTask('')
  }

  return { newTask, handleAddNewTask, handleSubmit }
}
