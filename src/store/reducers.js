import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { taskManagerReducer } from './TaskManager/reducers'
import { appBarReducer } from './AppBar/reducers'

export default combineReducers({
  form: formReducer,
  taskManager: taskManagerReducer,
  appBar: appBarReducer
});
