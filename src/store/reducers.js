import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { taskManagerReducer } from './TaskManager/reducers'
import { appBarReducer } from './AppBar/reducers'
import { RESET_APP } from './actions'
const appReducer = combineReducers({
  form: formReducer,
  taskManager: taskManagerReducer,
  appBar: appBarReducer
});

export default (state,  action ) =>{
    if(action.type === RESET_APP) {
      state = undefined
    }
    return appReducer(state, action )
}
