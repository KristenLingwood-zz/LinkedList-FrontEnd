import { combineReducers } from 'redux';
import auth from './auth';
import currentUser from './currentUser';
import error from './error';
import jobs from './jobs';
import search from './search';
import otherUser from './OtherUser';

const rootReducer = combineReducers({
  auth,
  currentUser,
  jobs,
  error,
  search,
  otherUser
});

export default rootReducer;
