import React from 'react';
import {compose} from '@truefit/bach';
import {withStore} from '@truefit/bach-redux';

const WithStore = ({store}) => (
  <div>
    <h1>withStore</h1>
    <ul>
      {store.getState().features.bachRedux.todo.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default compose(withStore())(WithStore);
