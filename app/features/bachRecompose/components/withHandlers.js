import React from 'react';
import {compose} from '@truefit/bach';
import {withHandlers} from '@truefit/bach-recompose';

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
