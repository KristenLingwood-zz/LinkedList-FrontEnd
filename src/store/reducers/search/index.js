import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function searchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_SEARCH_SUCCESS: {
      // expects an array
      return action.searchResult;
    }
    default:
      return state;
  }
}
