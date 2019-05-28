import React from 'react';
import {compose, withState} from '@truefit/bach';

const Component = ({count, setCount, count2, setCount2}) => (
  <div>
    <h1>With State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    <div>
      <h2>Count 2: {count2}</h2>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
    </div>
  </div>
);

const ComposedComponent = compose(
  withState('count', 'setCount', 0),
  withState('count2', 'setCount2', ({initialCount}) => initialCount),
)(Component);

export default () => <ComposedComponent initialCount={10} />;
