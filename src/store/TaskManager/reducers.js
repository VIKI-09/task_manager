// import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'redux-form'
import {ADD_TASK, COMPLETE_TOGGLE_TASK, REMOVE_TASK, EDIT_TASK, EDIT_TOGGLE_TASK} from './actions';
import { userService } from '../../services/userService'

const defaultState  = userService.getTaskList()

export const taskManagerReducer = (state = defaultState, action) => {
    switch(action.type){
      case ADD_TASK :
        return [
          ...state,
          {
            title: action.payload,
            id: Date.now(),
            completed: false,
            editMode: false
          }
        ]
      case REMOVE_TASK :
        return  [...state].filter(task => task.id !== action.payload)

      case EDIT_TOGGLE_TASK :
        return ([...state].map(task => {
            if(task.id === action.payload){
              task.editMode = true
            }
            return  task;
          }))
      case EDIT_TASK :
        return([...state].map(task => {
          if(task.id === action.payload.id){
            task.title = action.payload.value
            task.editMode = false
            task.completed = false
          }
          return task
        }))
      case COMPLETE_TOGGLE_TASK :
        return([...state].map(task => {
             if (task.id === action.payload) {
               task.completed = !task.completed
                         }
                   return task
              }))

      default:
        return state;
    }
}
