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
    return (
      <div>
        <h2>TodoForm</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input name='title' id='title' value={this.state.title} onChange={this.handleChange} />
          <label htmlFor='content'>Content</label>
          <input name='content' id='content' value={this.state.content} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm