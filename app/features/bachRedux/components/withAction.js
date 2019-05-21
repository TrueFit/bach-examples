import React from 'react';
import {compose} from '@truefit/bach';
import {withAction} from '@truefit/bach-redux';
import {addToDo} from '../actions';

const WithAction = ({addToDo}) => (
  <div>
    <h1>withAction</h1>
    <button
      onClick={() => {
        addToDo('New ToDo from withAction');
      }}
    >
      Click Me
    </button>
  </div>
);

export default compose(withAction('addToDo', addToDo))(WithAction);
