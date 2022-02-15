import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/App.scss';
// component file
import TodoContainer from './components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
