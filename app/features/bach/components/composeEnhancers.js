import React from 'react';
import {
  compose,
  composeEnhancers,
  withState,
  withCallback,
} from '@truefit/bach';

const Component = ({count, incrementCount}) => (
  <div>
    <h1>Compose Enhancers</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  </div>
);

const enhancers = composeEnhancers(withState('count', 'setCount', 0));

export default compose(
  enhancers,

  withCallback('incrementCount', ({count, setCount}) => () => {
    setCount(count + 1);
  }),
)(Component);
