import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { uiReducer } from './uiReducer';

export default combineReducers({
  routing: routerReducer,
  ui: uiReducer
});
