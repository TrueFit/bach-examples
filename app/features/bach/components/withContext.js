import React from 'react';
import {compose, withContext} from '@truefit/bach';

const Context = React.createContext({message: 'Hello Child'});

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

const Child = compose(withContext(['message'], Context))(Component, {
  debug: {log: true},
});

const Parent = () => {
  return <Child context={Context} />;
};

export default Parent;
