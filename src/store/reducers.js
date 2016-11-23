import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { uiReducer } from './uiReducer';
import { latestNewsReducer } from '../components/LatestNews/reducers';
import { careersReducer } from '../components/CareersCollection/reducers';
import { locationReducer } from '../components/LocationPage/reducers';
import { workReducer } from '../components/WorkCollection/reducers';

export default combineReducers({
  routing: routerReducer,
  ui: uiReducer,
  latestNews: latestNewsReducer,
  careers: careersReducer,
  location: locationReducer,
  work: workReducer
});
