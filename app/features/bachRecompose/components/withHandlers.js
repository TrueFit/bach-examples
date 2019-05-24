import React from 'react';
import {compose} from '@truefit/bach';
import {withHandlers} from '@truefit/bach-recompose';

const Component = ({sayHello, sayGoodbye, sayAnything}) => (
  <div>
    <h1>With Handlers</h1>
    <div>
      <button onClick={sayHello}>Say Hello</button>
    </div>
    <div>
      <button onClick={sayGoodbye}>Say Goodbye</button>
    </div>
    <div>
      <button onClick={sayAnything('anything')}>Say Anything</button>
    </div>
  </div>
);

export default compose(
  withHandlers({
    sayHello: () => () => {
      console.log('Hello'); // eslint-disable-line
    },
    sayGoodbye: () => () => {
      console.log('Goodbye'); // eslint-disable-line
    },
    sayAnything: () => message => () => {
      console.log(message); // eslint-disable-line
    },
  }),
)(Component);
