import React from 'react';
import BachDirectory from './bachDirectory';
import BachRecomposeDirectory from './bachRecomposeDirectory.js';
import BachReduxDirectory from './bachReduxDirectory';
import BachMaterialUi from './bachMaterialUIDirectory.js';

export default () => (
  <>
    <BachDirectory />
    <BachRecomposeDirectory />
    <BachReduxDirectory />
    <BachMaterialUi />
  </>
);
