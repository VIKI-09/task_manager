import { history } from '../../fake_backend/history';
import {userService} from '../../services/userService'




export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE'



export function signUpUser(user) {
  console.log('REGISTER ACTION')
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: USER_SIGNUP_REQUEST, payload: user } }
    function success(user) { return { type: USER_SIGNUP_SUCCESS, payload: user } }
    function failure(error) { return { type: USER_SIGNUP_FAILURE, payload: error } }
}
