import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function getOtherUserProfile(username) {
  return async dispatch => {
    try {
      dispatch({
        type: t.FETCH_OTHER_USER_REQUEST
      });
      let userProfile = await callAPI('GET', `/users/${username}`, true);
      dispatch(getCurrentUser(userProfile));
    } catch (error) {
      dispatch(getCurrentUserFail(error));
      return Promise.reject();
    }
  };
}

function getCurrentUser(userProfile) {
  return {
    type: t.FETCH_OTHER_USER_SUCCESS,
    nonLoggedInUser: userProfile
  };
}

function getCurrentUserFail(error) {
  return {
    type: t.FETCH_OTHER_USER_FAIL,
    error
  };
}
