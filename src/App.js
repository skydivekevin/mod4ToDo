import React, { Component } from 'react'
import TodoContainer from './components/TodoContainer'
import TodoForm from './components/TodoForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: undefined
    }
  }


componentDidMount(){
  setTimeout(() => {
    this.fetchTodos()
  }, 1200);
}

  fetchTodos = () => {
    let url = "http://localhost:3000/todos"
    fetch(url)
        .then(response => response.json())
        .then(response => this.setState({
            todos: response
        }))
  }

  addTodo = (todoObj) => {
    let url = "http://localhost:3000/todos"
    const newItem = {...todoObj}
    const newTodos = [...this.state.todos, newItem]
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(todoObj), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then( this.setState({
      todos: newTodos
    }))
  }

  render() {
    return(
      <div>
        <h1>Git Money Todo App</h1>
        <TodoForm addTodo={this.addTodo}/>
        {this.state.todos ? <TodoContainer todos={this.state.todos} /> : <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" /> }
      </div>
    )
  }
}

export default App