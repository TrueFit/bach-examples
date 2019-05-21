import React from 'react';
import Menu from './controls/menu';

const simple = ['withHandlers', 'withLifecycle'];

const combined = ['withStateAndHandlers', 'withStateLifecycleAndHandlers'];

export default () => (
  <Menu
    title="@truefit/bach-recompose"
    root="bachrecompose"
    simple={simple}
    combined={combined}
  />
);
