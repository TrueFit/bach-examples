import React from 'react';
import {Switch, Route} from 'react-router';

import {
  Directory,
  WithState,
  WithHandlers,
  WithEffect,
  WithLifecycle,
  WithContext,
  WithReducer,
  WithStateAndHandlers,
  WithStateLifecycleAndHandlers,
} from '../../examples/components';
import NotFound from './notFound';

export default () => (
  <Switch>
    <Route exact path="/" component={Directory} />
    <Route path="/withState" component={WithState} />
    <Route path="/withHandlers" component={WithHandlers} />
    <Route path="/withEffect" component={WithEffect} />
    <Route path="/withLifecycle" component={WithLifecycle} />
    <Route path="/withContext" component={WithContext} />
    <Route path="/withReducer" component={WithReducer} />

    <Route path="/withStateAndHandlers" component={WithStateAndHandlers} />
    <Route
      path="/withStateLifecycleAndHandlers"
      component={WithStateLifecycleAndHandlers}
    />

    <Route component={NotFound} />
  </Switch>
);
