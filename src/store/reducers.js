import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { uiReducer } from './uiReducer';
import { latestNewsReducer } from '../components/LatestNews/reducers';

export default combineReducers({
  routing: routerReducer,
  ui: uiReducer,
  latestNews: latestNewsReducer
});
