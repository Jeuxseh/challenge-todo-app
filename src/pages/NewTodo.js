import React, { Component } from 'react';
import todoService from '../services/todoServices';
import CreateTodo from '../components/CreateTodo';

class NewTodo extends Component {

  handleSubmit = (data) => {
    todoService.createTodo(data)
      .then((result) => {
        this.props.history.push("/todos")
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <CreateTodo onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default NewTodo;