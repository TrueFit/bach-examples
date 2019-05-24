import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';

const Component = ({count, alterCount}) => (
  <div>
    <h1>With Callback And State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={alterCount(1)}>Increment</button>
      <button onClick={alterCount(-1)}>Decrement</button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),

  withCallback('alterCount', ({count, setCount}) => delta => () => {
    setCount(count + delta);
  }),
)(Component);
