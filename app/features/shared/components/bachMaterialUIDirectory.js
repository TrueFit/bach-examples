import React from 'react';
import Menu from './controls/menu';

const simple = ['withStyles'];

const combined = [];

export default () => (
  <Menu
    title="@truefit/bach-material-ui"
    root="bachmaterialui"
    simple={simple}
    combined={combined}
  />
);
