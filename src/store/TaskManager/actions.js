import { userService } from '../../services/userService'

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TOGGLE_TASK = 'COMPLETE_TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_TOGGLE_TASK = 'EDIT_TOGGLE_TASK';



export const addTask = (title) => (dispatch) => {
  userService.addTask(title)
                .then(response => {
                  dispatch({
                    type: ADD_TASK,
                    payload: response
                  })
                })
}

export const setTaskComplete = id => ({
  type: COMPLETE_TOGGLE_TASK,
  payload: id
})
export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id
})
export const setNewTaskTitle = (id, value) => ({
  type: EDIT_TASK,
  payload: {id, value}
})
export const setTaskForEdit = id => ({
  type: EDIT_TOGGLE_TASK,
  payload: id
})
