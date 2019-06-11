import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector, withActions} from '@truefit/bach-redux';
import {addToDo} from '../actions';

const WithSelector = ({addToDo, todos}) => (
  <div>
    <h1>withActionsAndSelector</h1>
    <button
      onClick={() => {
        addToDo('New ToDo from withActionsAndSelector');
      }}
    >
      Click Me
    </button>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default compose(
  withActions({addToDo}),
  withSelector('todos', state => state.features.bachRedux.todo),
)(WithSelector);
