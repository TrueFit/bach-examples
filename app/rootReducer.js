/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import bachRedux from './features/bachRedux/reducers';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    features: combineReducers({
      bachRedux: bachRedux,
    }),
  });

export default rootReducer;
