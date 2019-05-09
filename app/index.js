import './styles/styles.scss';
import './babelHelpers';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import {render} from 'react-dom';
import {createBrowserHistory} from 'history';

import Root from './Root';
import {configureStore, configureHttp} from './util';

// configure stuff
const history = createBrowserHistory();
const store = configureStore(history);

configureHttp(store);

// load it into the page
render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
