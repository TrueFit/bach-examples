import React from 'react';
import {compose, withHandlers} from '@truefit/bach';

const Component = ({sayHello}) => (
  <div>
    <h1>With Handlers</h1>
    <div>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  </div>
);

export default compose(
  withHandlers({
    sayHello: () => {
      console.log('Hello'); // eslint-disable-line
    },
  }),
)(Component);
