import { userService } from '../../services/userService'

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TOGGLE_TASK = 'COMPLETE_TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_TOGGLE_TASK = 'EDIT_TOGGLE_TASK';
export const RECEIVE_TASKS = 'GET_TASKS';


export const  getTasks = () => dispatch => {

userService.getTaskList()
  .then(
    response => {
      dispatch({
        type: RECEIVE_TASKS,
        payload: response
      })
    },
    error => {
      console.log(error)
    })
}

export const addTask = title => dispatch => {

  userService.addTask(title)
    .then(
      response => {
        dispatch({
          type: ADD_TASK,
          payload: response
        })
      },
      error => {
        console.log(error)
      })
  }
export const setTaskComplete = id => dispatch => {

  userService.completeTask(id)
    .then(
      response => {
        dispatch({
          type: COMPLETE_TOGGLE_TASK,
          payload: id
        })
      },
      error => {
        console.log(error)
      }
    )
}


export const removeTask = id => dispatch => {

  userService.deleteTask(id)
    .then(
      response => {
        dispatch({
          type: REMOVE_TASK,
          payload: id
        })
      },
      error => {
        console.log(error)
      })
}


export const setNewTaskTitle = (id, value) => dispatch => {
  userService.editTask(id, value)
    .then(
      response =>{
        dispatch({
          type: EDIT_TASK,
          payload: {id, value}
        })
      },
      error => {
        console.log(error)
      }
    )
  }


export const setTaskForEdit = id => ({
  type: EDIT_TOGGLE_TASK,
  payload: id
})
