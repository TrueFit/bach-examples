import produce from 'immer';
import {ADD_TODO} from '../actions';

const INITIAL = ['Make a list'];

export default (state = INITIAL, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, draft => {
        draft.push(action.payload);
      });

    default:
      return state;
  }
};
