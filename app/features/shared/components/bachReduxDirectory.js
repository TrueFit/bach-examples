import React from 'react';
import Menu from './controls/menu';

const simple = [
  'withAction',
  'withActions',
  'withDispatch',
  'withSelector',
  'withStore',
];
const combined = ['withActionsAndSelector'];

export default () => (
  <Menu
    title="@truefit/bach-redux"
    root="bachredux"
    simple={simple}
    combined={combined}
  />
);
