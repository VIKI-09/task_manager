import {USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE} from './actions';


export function signUpReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { registering: true };
    case USER_SIGNUP_SUCCESS:
      return {};
    case USER_SIGNUP_FAILURE:
      return {};
    default:
      return state
  }
}
