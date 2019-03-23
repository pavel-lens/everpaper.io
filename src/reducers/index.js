import { combineReducers } from 'redux';

import global from './global';
import papers from './papers';

export default combineReducers({
  global,
  papers,
});
