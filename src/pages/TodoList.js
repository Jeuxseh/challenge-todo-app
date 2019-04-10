import React, { Component } from 'react';
import todoService from '../services/todoServices';
import TodoCard from '../components/TodoCard';
import {Link} from 'react-router-dom';

class TodoList extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos = () => {
    todoService.getAll()
      .then(data => {
        this.setState({
          data,
        })
      })
  }

  render() {
    return (
      <div>
        <Link to="/newtodo">Create new Todo</Link>
        <ul>
          {this.state.data.map(todo => (
            <TodoCard
              key={todo._id}
              data={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;