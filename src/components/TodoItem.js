import React from 'react'

const TodoItem = (props) => {
  return(
    <div>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.content}</p>
    </div>
  )
}

export default TodoItem