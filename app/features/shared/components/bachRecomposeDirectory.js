import React from 'react';
import Menu from './controls/menu';

const simple = [
  'mapProps',
  'withHandlers',
  'withLifecycle',
  'renameProp',
  'renameProps',
  'renderIf',
  'renderNothing',
  'withProps',
];

const combined = [
  'withStateAndHandlers',
  'withStateLifecycleAndHandlers',
  'withPropsAndState',
];

export default () => (
  <Menu
    title="@truefit/bach-recompose"
    root="bachrecompose"
    simple={simple}
    combined={combined}
  />
);
