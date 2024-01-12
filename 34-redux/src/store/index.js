import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import evenReducer from './evenReducer';
import visibleReducer from './visibleReducer';
const rootReducer = combineReducers({
  counter: counterReducer,
  even: evenReducer,
  visible: visibleReducer,
});

export default rootReducer;
