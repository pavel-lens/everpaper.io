import { init } from '@rematch/core';
// import { combineReducers } from 'redux';
import _withRematch from './withRematch';

import papers from './models/papers';

const store = init({
  models: {
    papers,
  },
  redux: {
    initialState: {},
  },
});

export const withRematch = _withRematch;
export default store;
