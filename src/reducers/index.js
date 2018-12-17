import { combineReducers } from 'redux';
import auth from './auth';
import garage from './garage';

const rootReducer = combineReducers({
  auth,
  garage,
});

export default rootReducer;
  