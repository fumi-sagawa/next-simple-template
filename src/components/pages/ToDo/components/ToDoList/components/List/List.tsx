import { useList } from './useList'
import styles from './List.module.scss'

export const List = () => {
  const { todos, handleRemoveTask, handleUpdateTask } = useList()

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={`${todo.isCompleted ? styles.isCompleted : ''}`}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          {todo.task}
          <button onClick={() => handleRemoveTask(index)}>X</button>
        </li>
      ))}
    </ul>
  )
}
