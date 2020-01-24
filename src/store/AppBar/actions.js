import { userService } from '../../services/userService'
import { history } from '../../fake_backend/history'




export const CHANGE_STATUS_LOGOUT = 'CHANGE_STATUS_LOGOUT';
export const CHANGE_STATUS_LOGIN = 'CHANGE_STATUS_LOGIN';

export const changeStatusLogout = () => {
    history.push('/login')
    userService.logout()
  return {
    type: CHANGE_STATUS_LOGOUT
  }
}
export const changeStatusLogin = () => {
  return {
    type: CHANGE_STATUS_LOGIN
  }
}
