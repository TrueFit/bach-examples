import React from 'react';
import {compose, withState, withLifecycle} from '@truefit/bach';

const Component = ({flag}) => (
  <div>
    <h1>With Lifecycle</h1>
    <div>Flag: {flag ? 'true' : 'false'}</div>
  </div>
);

export default compose(
  withState('flag', 'setFlag', false),

  withLifecycle({
    componentDidMount: props => {
      console.log('Component Did Mount: ', props); // eslint-disable-line

      setTimeout(() => {
        props.setFlag(true);
      }, 2000);
    },

    componentDidUpdate: (props, prevProps) => {
      console.log('Component Did Update', props, prevProps); // eslint-disable-line
    },

    componentWillUnmount: props => {
      console.log('Component Will Unmount', props); // eslint-disable-line
    },
  }),
)(Component);
