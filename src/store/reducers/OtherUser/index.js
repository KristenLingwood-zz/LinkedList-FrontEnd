import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = {
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  photo: '',
  current_company: ''
};

export default function otherUser(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_OTHER_USER_SUCCESS:
      return {
        ...state,
        ...action.nonLoggedInUser
      };
    default:
      return state;
  }
}
