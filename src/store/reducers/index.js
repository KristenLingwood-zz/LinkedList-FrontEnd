import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import search from './search';
import otherUser from './OtherUser';
import specificJobReducer from './specificJob';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  error,
  search,
  otherUser,
  specificJobReducer
});

export default rootReducer;
