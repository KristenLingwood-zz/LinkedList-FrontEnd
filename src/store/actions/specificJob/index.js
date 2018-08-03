import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function fetchSpecificJobRequest(id) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_SPECIFIC_JOB_REQUEST });
      // call the API for /jobs, auth required
      let specificJob = await callAPI('get', `/jobs/${id}`, true);
      // dispatch the success action creator and the jobs that we got back
      dispatch(fetchJobSuccess(specificJob));
    } catch (error) {
      dispatch(fetchJobFail(error));
      return Promise.reject();
    }
  };
}

export function fetchJobSuccess(specificJob) {
  return { type: t.FETCH_SPECIFIC_JOB_SUCCESS, specificJob };
}

export function fetchJobFail(error) {
  return { type: t.FETCH_SPECIFIC_JOB_FAIL, error };
}
