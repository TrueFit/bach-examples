import React from 'react';
import {compose, withState, withMemo} from '@truefit/bach';

const Component = ({
  message,
  count,
  setCount,
  refreshCount,
  setRefreshCount,
}) => (
  <div>
    <h1>With Memo And State</h1>
    <div>
      <h2>Message: {message}</h2>
    </div>
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    <div>
      <h2>Refresh Count: {refreshCount}</h2>
      <button onClick={() => setRefreshCount(refreshCount + 1)}>
        Increment
      </button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),
  withState('refreshCount', 'setRefreshCount', 0),

  withMemo(
    'message',
    ({count, refreshCount}) => {
      return `Hello World: [${count}, ${refreshCount}]`;
    },
    ['refreshCount'],
  ),
)(Component);
