import React from 'react';
import {compose, withContext} from '@truefit/bach';

const Component = ({context: {value}}) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>Value: {value}</h2>
      </div>
    </div>
  );
};

export default compose(withContext('context', React.createContext({value: 0})))(
  Component,
);
