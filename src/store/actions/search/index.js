import * as t from '../actionTypes';
import { callAPI } from '../../../services/api';

export function getSearchResults(path, queryString) {
  return async dispatch => {
    try {
      dispatch({ type: t.FETCH_SEARCH_RESULTS });
      let searchResult = await callAPI('GET', `/${path}?${queryString}`, true);
      dispatch(getSearchSuccess(searchResult));
    } catch (error) {
      dispatch(getSearchFail(error));
      return Promise.reject();
    }
  };
}

function getSearchSuccess(searchResult) {
  return {
    type: t.FETCH_SEARCH_SUCCESS,
    searchResult
  };
}

function getSearchFail(error) {
  return {
    type: t.FETCH_SEARCH_FAIL,
    error
  };
}
