import React from 'react';
import {compose, withEffect} from '@truefit/bach';

const Component = () => (
  <div>
    <h1>With Effect</h1>
  </div>
);

export default compose(
  withEffect(() => {
    console.log('Effect Fired'); // eslint-disable-line
  }),
)(Component);
