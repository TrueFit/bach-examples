import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {memo} from '@truefit/bach-recompose';

const Memo = compose(
  memo((prevProps, nextProps) => {
    return nextProps.count % 2 === 0;
  }),
)(({count}) => (
  <>
    <h1>Memo</h1>
    <h2>{count}</h2>
  </>
));

export default compose(
  withState('count', 'setCount', 0),
  withCallback('increment', ({count, setCount}) => () => {
    setCount(count + 1);
  }),
)(({count, increment}) => (
  <div>
    <Memo count={count} />
    <button onClick={increment}>Increment</button>
  </div>
));
