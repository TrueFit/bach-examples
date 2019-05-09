/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
