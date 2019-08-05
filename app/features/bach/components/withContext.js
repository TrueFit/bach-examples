import React from 'react';
import {compose, withContext} from '@truefit/bach';

const Context = React.createContext({
  greeting: 'Hello',
  target: 'World',
});

const Component = ({greeting, target}) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>
          {greeting} {target}
        </h2>
      </div>
    </div>
  );
};

const Child = compose(
  withContext(['greeting'], Context),
  withContext(['target'], 'context'),
)(Component);

const Parent = () => {
  return <Child context={Context} />;
};

export default Parent;
