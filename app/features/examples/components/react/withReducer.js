import React from 'react';
import {compose, withReducer} from '@truefit/bach';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const Component = ({count, countDispatch}) => (
  <div>
    <h1>With Reducer</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => countDispatch({type: INCREMENT})}>
        Increment
      </button>
      <button onClick={() => countDispatch({type: DECREMENT})}>
        Decrement
      </button>
    </div>
  </div>
);

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default compose(withReducer('count', reducer, 0))(Component);
