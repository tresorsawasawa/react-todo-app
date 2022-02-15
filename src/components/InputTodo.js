import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = props;
    addTodoProps(inputText.title);
    setInputText({
      title: '',
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        name="title"
        value={inputText.title}
        onChange={onChange}
        required
      />
      <button className="input-submit clickable" type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodoProps: null,
};

export default InputTodo;
