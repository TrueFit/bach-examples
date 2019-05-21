import React from 'react';
import {Switch, Route} from 'react-router';

import {
  WithState,
  WithEffect,
  WithContext,
  WithReducer,
  WithCallback,
  WithMemo,
  WithRef,
  WithEffectAndState,
  WithMemoAndState,
} from '../../bach/components';

import {
  WithHandlers,
  WithLifecycle,
  WithStateAndHandlers,
  WithStateLifecycleAndHandlers,
} from '../../bachRecompose/components';

import {
  WithAction,
  WithActions,
  WithDispatch,
  WithSelector,
  WithStore,
  WithActionsAndSelector,
} from '../../bachRedux/components';

import Directory from './directory';
import NotFound from './notFound';

export default () => (
  <Switch>
    <Route exact path="/" component={Directory} />

    <Route path="/bach">
      <Route path="*/withState" component={WithState} />
      <Route path="*/withEffect" component={WithEffect} />
      <Route path="*/withContext" component={WithContext} />
      <Route path="*/withReducer" component={WithReducer} />
      <Route path="*/withCallback" component={WithCallback} />
      <Route path="*/withMemo" component={WithMemo} />
      <Route path="*/withRef" component={WithRef} />

      <Route path="*/withEffectAndState" component={WithEffectAndState} />
      <Route path="*/withMemoAndState" component={WithMemoAndState} />
    </Route>

    <Route path="/bachrecompose">
      <Route path="*/withHandlers" component={WithHandlers} />
      <Route path="*/withLifecycle" component={WithLifecycle} />

      <Route path="*/withStateAndHandlers" component={WithStateAndHandlers} />
      <Route
        path="*/withStateLifecycleAndHandlers"
        component={WithStateLifecycleAndHandlers}
      />
    </Route>

    <Route path="/bachredux">
      <Route path="*/withAction" component={WithAction} />
      <Route path="*/withActions" component={WithActions} />
      <Route path="*/withDispatch" component={WithDispatch} />
      <Route path="*/withSelector" component={WithSelector} />
      <Route path="*/withStore" component={WithStore} />
      <Route
        path="*/withActionsAndSelector"
        component={WithActionsAndSelector}
      />
    </Route>

    <Route component={NotFound} />
  </Switch>
);
