import React from 'react'

const TodoItem = (props) => {


  return (
    <div>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.content}</p>
      <p>{props.todo.id}</p>
      {/* Note the anonymous function below. We use an anonymous function here so it will run only when clicked on. */}
      <button onClick={() => props.handleDelete(props.todo.id)}>Delete post</button>
    </div>
  )
}

export default TodoItem