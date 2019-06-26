import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    return(
      <div>
        <h2>TodoForm</h2>
        <form onSubmit={this.handleSubmit}>
          <label for='title'>Title</label>
          <input name='title' value={this.state.title} onChange={this.handleChange} />
          <label for='content'>Content</label>
          <input name='content' value={this.state.content} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm