import React from 'react';
import {compose, withState, withHandlers} from '@truefit/bach';

const Component = ({count, incrementCount}) => (
  <div>
    <h1>With State And Handlers</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),

  withHandlers({
    incrementCount: ({count, setCount}) => {
      setCount(count + 1);
    },
  }),
)(Component);
