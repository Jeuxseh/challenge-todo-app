import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import SingleTodo from './pages/SingleTodo';
import NewTodo from './pages/NewTodo';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/todos" component={TodoList}/>
        <Route exact path="/todos/:id" component={SingleTodo}/>
        <Route exact path="/newtodo" component={NewTodo}/>
      </div>
    );
  }
}

export default App;
