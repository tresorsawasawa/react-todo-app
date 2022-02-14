/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from './scss/TodoItem.module.scss';

class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#8b929e',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <span style={this.props.todo.completed ? completedStyle : null}>{title}</span>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={() => this.props.deleteTodoProps(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
