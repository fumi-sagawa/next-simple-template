import { atom } from 'jotai'

const initialState = [
  {
    task: 'Learn vue.js',
    isCompleted: false,
  },
  {
    task: 'Learn React Hook',
    isCompleted: false,
  },
  {
    task: 'Learn Gatsby.js',
    isCompleted: false,
  },
]

export const todoAtom = atom(initialState)
export const inputAtom = atom('')
