import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
// component file
import TodoContainer from './components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
