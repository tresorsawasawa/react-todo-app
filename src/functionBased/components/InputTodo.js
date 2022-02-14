/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <button className="input-submit clickable" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default InputTodo;
