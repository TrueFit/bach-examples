import React from 'react';
import Menu from './controls/menu';

// Bach
const bachSimple = [
  'withState',
  'withHandlers',
  'withEffect',
  'withLifecycle',
  'withContext',
  'withReducer',
  'withCallback',
  'withMemo',
  'withRef',
];

const BachSimple = () => <Menu root="bach" links={bachSimple} />;

const bachCombined = [
  'withStateAndHandlers',
  'withStateLifecycleAndHandlers',
  'withEffectAndState',
  'withMemoAndState',
];

const BachCombined = () => <Menu root="bach" links={bachCombined} />;

export default () => (
  <>
    <h1>Bach</h1>
    <h2>Simple</h2>
    <BachSimple />

    <h2>Combined</h2>
    <BachCombined />
  </>
);
