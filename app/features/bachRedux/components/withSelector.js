import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';

const WithSelector = ({todos}) => (
  <div>
    <h1>withSelector</h1>
    <ul>
      {todos.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default compose(
  withSelector('todos', state => state.features.bachRedux.todo),
)(WithSelector);
