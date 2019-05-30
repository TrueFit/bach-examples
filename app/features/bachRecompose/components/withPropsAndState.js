import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {withProps} from '@truefit/bach-recompose';

const WithPropsAndState = ({title, description, increment}) => (
  <div>
    <h1>withPropsAndState</h1>
    <h2>Title: {title}</h2>
    <h2>Description: {description}</h2>
    <button onClick={increment}>^ Increase ^</button>
  </div>
);

export default compose(
  withState('count', 'setCount', 0),
  withProps({title: 'Hello', description: ({count}) => `World ${count}`}),
  withCallback('increment', ({count, setCount}) => () => {
    setCount(count + 1);
  }),
)(WithPropsAndState);
