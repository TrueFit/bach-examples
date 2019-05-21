import React from 'react';
import {compose} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';
import {addToDo} from '../actions';

const WithActions = ({addToDo}) => (
  <div>
    <h1>withActions</h1>
    <button
      onClick={() => {
        addToDo('New ToDo from withActions');
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withActions({addToDo}))(WithActions);
