import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import {taskManagerReducer} from './TaskManager/reducers'
import {signUpReducer} from './SignUp/reducers'

export default combineReducers({
  form: formReducer,
  taskManager: taskManagerReducer
});
