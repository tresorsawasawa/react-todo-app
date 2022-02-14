/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {this.props.todo.title}
        <button
          type="button"
          className="clickable"
          onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
