import React from 'react';
import {useDebounce, useDebouncedCallback} from 'use-debounce';
import {compose, withState, withCallback, withHook} from '@truefit/bach';

const Component = ({increment, count, debouncedCount, incrementCount}) => (
  <div>
    <h1>With Hook</h1>
    <h2>Count: {count}</h2>
    <h2>Debounced Count: {debouncedCount}</h2>

    <button onClick={incrementCount}>Increment</button>
    <button onClick={increment}>Click Debounce Callback</button>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),
  withCallback('incrementCount', ({count, setCount}) => () => {
    setCount(count + 1);
  }),

  withHook(useDebounce, [({count}) => count, 1000], ['debouncedCount']),

  withHook(
    useDebouncedCallback,
    [
      ({incrementCount}) => () => {
        incrementCount();
      },
      1000,
    ],
    ['increment'],
  ),
)(Component);
