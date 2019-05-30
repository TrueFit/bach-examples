import React from 'react';
import {compose} from '@truefit/bach';
import {renderNothing} from '@truefit/bach-recompose';

const Content = () => <div>Something</div>;

export default compose(renderNothing())(Content);
