import React, { Component } from 'react'
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, title: 'Brush teeth', content: 'Please brush your teeth before leaving the house'},
        {id: 2, title: 'Comb hair', content: 'Please comb your hair before leaving the house'}
      ]
    }
  }

  addTodo = (todoObj) => {
    const newItem = {...todoObj, id: Date.now()}
    const newTodos = [...this.state.todos, newItem]
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return(
      <div>
        <h1>Git Money Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoContainer todos={this.state.todos} />
      </div>
    )
  }
}

export default App