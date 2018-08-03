import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = [];

export default function specificJob(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_SPECIFIC_JOB_SUCCESS: {
      // expects an array
      return [...state, action.specificJob];
    }
    default:
      return state;
  }
}
