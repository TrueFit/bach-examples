import React from 'react';
import Menu from './controls/menu';

const simple = ['withFormik', 'withField', 'withFormikContext'];

const combined = [];

export default () => (
  <Menu
    title="@truefit/bach-with-formik"
    root="bachformik"
    simple={simple}
    combined={combined}
  />
);
