import React from 'react';
import Menu from './controls/menu';

const simple = [
  'withState',
  'withEffect',
  'withContext',
  'withReducer',
  'withCallback',
  'withMemo',
  'withRef',
  'withHook',
];

const combined = [
  'withEffectAndState',
  'withMemoAndState',
  'withCallbackAndState',
];

export default () => (
  <Menu title="@truefit/bach" root="bach" simple={simple} combined={combined} />
);
