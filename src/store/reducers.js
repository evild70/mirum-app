import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { uiReducer } from './uiReducer';
import { dataReducer } from '../firebase/reducers';

export default combineReducers({
  routing: routerReducer,
  ui: uiReducer,
  data: dataReducer
});
