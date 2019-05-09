import React from 'react';
import {compose, withState} from '@truefit/bach';

const Component = ({count, setCount}) => (
  <div>
    <h1>With State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  </div>
);

export default compose(withState('count', 'setCount', 0))(Component);
