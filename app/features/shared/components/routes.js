import React from 'react';
import {Switch, Route} from 'react-router';

import {
  WithState,
  WithHandlers,
  WithEffect,
  WithLifecycle,
  WithContext,
  WithReducer,
  WithCallback,
  WithMemo,
  WithRef,
  WithStateAndHandlers,
  WithStateLifecycleAndHandlers,
  WithEffectAndState,
  WithMemoAndState,
} from '../../bach/components';

import Directory from './directory';
import NotFound from './notFound';

export default () => (
  <Switch>
    <Route exact path="/" component={Directory} />

    <Route path="/bach">
      <Route path="*/withState" component={WithState} />
      <Route path="*/withHandlers" component={WithHandlers} />
      <Route path="*/withEffect" component={WithEffect} />
      <Route path="*/withLifecycle" component={WithLifecycle} />
      <Route path="*/withContext" component={WithContext} />
      <Route path="*/withReducer" component={WithReducer} />
      <Route path="*/withCallback" component={WithCallback} />
      <Route path="*/withMemo" component={WithMemo} />
      <Route path="*/withRef" component={WithRef} />

      <Route path="*/withStateAndHandlers" component={WithStateAndHandlers} />
      <Route
        path="*/withStateLifecycleAndHandlers"
        component={WithStateLifecycleAndHandlers}
      />
      <Route path="*/withEffectAndState" component={WithEffectAndState} />
      <Route path="*/withMemoAndState" component={WithMemoAndState} />
    </Route>

    <Route component={NotFound} />
  </Switch>
);
