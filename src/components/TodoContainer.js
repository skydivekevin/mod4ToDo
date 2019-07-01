import React from 'react'
import TodoItem from './TodoItem'

const TodoContainer = (props) => {

  const displayedTodos = props.todos.map(todo => {
    return <TodoItem key={todo.id} todo={todo} handleDelete={props.handleDelete} />
  })

  return (
    <div>
      <h2>TodoContainer</h2>
      {displayedTodos}
    </div>
  )
}

export default TodoContainer