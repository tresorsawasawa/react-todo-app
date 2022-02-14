/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title);
    setTitle('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        name="title"
        value={title}
        onChange={onChange}
        required
      />
      <button className="input-submit clickable" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
