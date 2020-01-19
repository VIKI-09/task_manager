
import { userService } from '../../fake_backend/service';
import { history } from '../../history'

export const REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'USER_REGISTER_FAILURE'



export default function register(user) {
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
    function request(user) { return { type: REGISTER_REQUEST, payload: user } }
    function success(user) { return { type: REGISTER_SUCCESS, payload: user } }
    function failure(error) { return { type: REGISTER_FAILURE, payload: error } }
  }
