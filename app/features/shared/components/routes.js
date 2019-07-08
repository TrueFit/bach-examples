import _ from 'lodash';
import React from 'react';
import {Switch, Route} from 'react-router';

import * as Bach from '../../bach/components';
import * as BachRecompose from '../../bachRecompose/components';
import * as BachRedux from '../../bachRedux/components';
import * as BachMaterialUI from '../../bachMaterialUI/components';
import * as BachFormik from '../../bachFormik/components';

import Directory from './directory';
import NotFound from './notFound';

const RouteMap = {
  bach: Bach,
  bachrecompose: BachRecompose,
  bachredux: BachRedux,
  bachmaterialui: BachMaterialUI,
  bachformik: BachFormik,
};

const RouteTree = ({root, components}) => {
  const branches = Object.keys(components).map(key => (
    <Route
      key={key}
      path={`*/${_.lowerFirst(key)}`}
      component={components[key]}
    />
  ));

  return <Route path={root}>{branches}</Route>;
};

const ExampleRoutes = () =>
  Object.keys(RouteMap).map(key => (
    <RouteTree key={key} root={`/${key}`} components={RouteMap[key]} />
  ));

export default () => (
  <Switch>
    <Route exact path="/" component={Directory} />
    <ExampleRoutes />
    <Route component={NotFound} />
  </Switch>
);
