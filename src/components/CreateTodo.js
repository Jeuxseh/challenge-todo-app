import React, { Component } from 'react';

class CreateTodo extends Component {

  state = {
    title: '',
    body: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input onChange={this.handleChange} placeholder="title..." value={title} name="title" type="text" />
          <input onChange={this.handleChange} placeholder="containt..." value={body} name="body" type="text" />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateTodo;