/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-labels */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: false,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChangeCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  render() {
    return (
      <>
        <Header />
        <React.StrictMode>
          <InputTodo addTodoProps={this.addTodoItem} />
          <div>
            <TodosList
              todos={this.state.todos}
              handleChangeProps={this.handleChangeCompleted}
              deleteTodoProps={this.deleteTodo}
            />
          </div>
        </React.StrictMode>
      </>
    );
  }
}

export default TodoContainer;
