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
  //we use componentDidMount here because we want the fetch to happen first, immediately after the DOM renders.
  componentDidMount() {
    setTimeout(() => {
      this.fetchTodos()
    }, 700);
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
    const newItem = { ...todoObj }
    const newTodos = [...this.state.todos, newItem]

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(todoObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .then(this.setState({ newTodos }))
      .catch(error => console.error('Error:', error))
  }

  handleDelete = (id) => {
    //uncomment the next line if you want to provide dummy data when switching to put method
    // let newObj = { title: "Joe R", content: "Rocks" }
    let url = `http://localhost:3000/todos/${id}`
    fetch(url, {
      // next line can switch between DELETE and PUT methods; assuming you have a body to pass
      method: 'PUT',
      //this is the body below. Uncomment if you want to post
      // body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Git Money Todo App</h1>
        {/* Here we are passing the addTodo and updateTodo methods (this.addTodo and this.updateTodo) to TodoForm. Because of this, when we want to access these methods in the TodoForm component, they will be known as "props.addTodo and props.updateTodo (if a functional component) or this.props.<method name> if class component" */}
        <TodoForm addTodo={this.addTodo} updateTodo={this.updateTodo} />
        {this.state.todos ? <TodoContainer todos={this.state.todos} handleDelete={this.handleDelete} /> : <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />}
      </div>
    )
  }
}

export default App