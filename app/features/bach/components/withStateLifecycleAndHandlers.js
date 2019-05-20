import React from 'react';
import {compose, withState, withHandlers, withLifecycle} from '@truefit/bach';

const Component = ({count, incrementCount}) => (
  <div>
    <h1>With State, Lifecycle, Handlers</h1>
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

  withLifecycle({
    componentDidMount: props => {
      console.log('Component Did Mount: ', props); // eslint-disable-line
    },

    componentDidUpdate: (props, prevProps) => {
      console.log('Component Did Update', props, prevProps); // eslint-disable-line
    },

    componentWillUnmount: props => {
      console.log('Component Will Unmount', props); // eslint-disable-line
    },
  }),
)(Component);
