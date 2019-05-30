import React from 'react';
import {compose} from '@truefit/bach';
import {withProps} from '@truefit/bach-recompose';

const WithProps = ({title, description}) => (
  <div>
    <h1>withProps</h1>
    <h2>Title: {title}</h2>
    <h2>Description: {description}</h2>
  </div>
);

export default compose(withProps({title: 'Hello', description: () => 'World'}))(
  WithProps,
);
