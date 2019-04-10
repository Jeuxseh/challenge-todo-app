import React, { Component } from 'react';
import todoService from '../services/todoServices';

class EditTodo extends Component {

  state = {
    title: this.props.todo.title,
    body: this.props.todo.body,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {_id} = this.props.todo;
    todoService.editTodo(_id, this.state)
      .then(result => this.props.onSubmit(result.data))
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Title..." value={this.state.title} name="title" type="text"/>
          <input onChange={this.handleChange} placeholder="Description..." value={this.state.body} name="body" type="text"/>
          <button  type="submit">Edit</button>
        </form>
        
      </div>
    );
  }
}

export default EditTodo;