import React, { Component } from 'react';
import todoService from '../services/todoServices';
import EditTodo from '../components/EditTodo';

class SingleTodo extends Component {

  state = {
    data: {},
    editing: false,
  }

  componentDidMount() {
    this.getTodo();
  }

  getTodo = () => {
    const { id } = this.props.match.params;
    todoService.getTodo(id)
      .then(data => {
        this.setState({
          data
        })
      })
      .catch(error => console.log(error))
  }

  handleClick = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleUpdate = (todo) => {
    this.setState({
      editing: !this.state.editing,
      data: todo,
    })
  }

  handleDelete = () => {
    const { id } = this.props.match.params;
    todoService.deleteTodo(id)
      .then(() => {
        this.props.history.push('/todos');
      })
      .catch(err => console.log(err));
  }

  render() {
    const { title, body } = this.state.data;
    return (
      <div>
        {this.state.editing ? <EditTodo onSubmit={this.handleUpdate} todo={this.state.data} /> :

          <>
            <h2>{title}</h2>
            <p>{body}</p>
            <button  onClick={this.handleClick}>Edit Todo</button>
            <button  onClick={this.handleDelete}>Delete Todo</button>
          </>

        }
      </div>
    );
  }
}

export default SingleTodo;