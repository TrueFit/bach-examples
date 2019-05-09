import React from 'react';
import {compose, withEffect, withState} from '@truefit/bach';

const Component = ({count, setCount, flag, setFlag}) => (
  <div>
    <h1>With Effect And State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
    <div>
      <h2>Flag: {flag ? 'on' : 'off'}</h2>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Flip
      </button>
    </div>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),
  withState('flag', 'setFlag', false),

  withEffect(() => {
    console.log('Always Effect Fired'); // eslint-disable-line
  }),

  withEffect(() => {
    console.log('On Load'); // eslint-disable-line

    return () => {
      console.log('On Cleanup'); // eslint-disable-line
    };
  }, []),

  withEffect(() => {
    console.log('Only On Count Fired'); // eslint-disable-line
  }, ['count']),
)(Component);
