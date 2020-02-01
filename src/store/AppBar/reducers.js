import  { CHANGE_STATUS_LOGOUT, CHANGE_STATUS_LOGIN } from './actions'


const initialState = localStorage.getItem('user') ? { loggedIn: true } : { loggedIn: false }

function getAuthUserData (){

  let user = JSON.parse(localStorage.getItem('user'));
let userData =  user ? {userName: user.email,  loggedIn: true } : {};
return userData
}

export const appBarReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_STATUS_LOGOUT:
      return {
        loggedIn: false
      };
    case CHANGE_STATUS_LOGIN:
      return {
        loggedIn: true
      }
    default:
      return state
  }
}
