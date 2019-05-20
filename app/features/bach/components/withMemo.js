import React from 'react';
import {compose, withMemo} from '@truefit/bach';

const Component = ({message}) => (
  <div>
    <h1>With Memo</h1>
    <div>
      <h2>Message: {message}</h2>
    </div>
  </div>
);

export default compose(
  withMemo('message', () => {
    return 'Hello World';
  }),
)(Component);
