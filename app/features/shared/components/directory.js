import React from 'react';
import BachDirectory from './bachDirectory';
import BachRecomposeDirectory from './bachRecomposeDirectory';
import BachReduxDirectory from './bachReduxDirectory';
import BachMaterialUi from './bachMaterialUIDirectory';
import BachFormik from './bachFormikDirectory';

export default () => (
  <>
    <BachDirectory />
    <BachRecomposeDirectory />
    <BachReduxDirectory />
    <BachMaterialUi />
    <BachFormik />
  </>
);
