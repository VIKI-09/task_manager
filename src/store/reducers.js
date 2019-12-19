import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import {taskManagerReducer} from './TaskManager/reducers'

export default combineReducers({
  form: formReducer,
  taskManager: taskManagerReducer
});
