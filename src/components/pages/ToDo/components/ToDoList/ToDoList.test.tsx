import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToDoList } from './ToDoList'

describe('ToDoListの結合テスト', () => {
  it('正しいタイトルがある', () => {
    render(<ToDoList />)
    expect(screen.getByText('ToDo List')).toBeTruthy()
  })

  it('タスクを追加した際にタスクのリストが１つだけ増える', async () => {
    render(<ToDoList />)
    const inputElement = screen.getByPlaceholderText(/add new task/i)
    const initilalListElements = screen.getAllByRole('listitem')

    const buttonElement = screen.getByRole('button', { name: '追加' })
    await userEvent.type(inputElement, 'Learn Testing Libary')
    await userEvent.click(buttonElement)

    const listElements = screen.getAllByRole('listitem')
    expect(listElements).toHaveLength(initilalListElements.length + 1)
  })

  it('追加されたタスク名が入力値と一致している', async () => {
    render(<ToDoList />)
    const inputElement = screen.getByPlaceholderText(/add new task/i)

    const buttonElement = screen.getByRole('button', { name: '追加' })
    await userEvent.type(inputElement, 'Learn Testing Libary')
    await userEvent.click(buttonElement)

    const listElements = screen.getAllByRole('listitem')
    expect(listElements.slice(-1)[0]?.textContent).toMatch(/Learn Testing Libary/)
  })
})
