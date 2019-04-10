import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TodoCard extends Component {

  state = {
    data: {}
  }

  render() {
    const {title, body, _id} = this.props.data;
    return (
      <>
        <li className="card">
          <Link to={`/todos/${_id}`}>
            {title}
          </Link>
          <div>
            {body}
          </div>
        </li>
      </>
    );
  }
}

export default TodoCard;