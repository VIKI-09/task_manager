// import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'redux-form'
import {ADD_TASK, COMPLETE_TOGGLE_TASK, REMOVE_TASK, EDIT_TASK, EDIT_TOGGLE_TASK, RECEIVE_TASKS, RESET_TASK_LIST} from './actions';
import { userService } from '../../services/userService'

const initialState  = []

export const taskManagerReducer = (state = initialState, action) => {
    switch(action.type){
      case RECEIVE_TASKS :
          if(action.payload){
            return [
              ...state,
              ...action.payload
            ]
          }
        return state
      case ADD_TASK :
        return [
          ...state,
          action.payload
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
        case RESET_TASK_LIST:
          return initialState

      default:
        return state;
    }
}
