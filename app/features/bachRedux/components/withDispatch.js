import React from 'react';
import {compose} from '@truefit/bach';
import {withDispatch} from '@truefit/bach-redux';
import {ADD_TODO} from '../actions';

const WithDispatch = ({dispatch}) => (
  <div>
    <h1>withDispatch</h1>
    <button
      onClick={() => {
        dispatch({
          type: ADD_TODO,
          payload: 'New ToDo from withDispatch',
        });
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withDispatch())(WithDispatch);
