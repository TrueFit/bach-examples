import React from 'react';
import {compose, withContext} from '@truefit/bach';

const Component = ({message}) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

const Child = compose(withContext(['message'], 'context'))(Component);

const Parent = () => {
  const context = React.createContext({message: 'Hello Child'});

  return <Child context={context} />;
};

export default Parent;
