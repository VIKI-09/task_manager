export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TOGGLE_TASK = 'COMPLETE_TOGGLE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_TOGGLE_TASK = 'EDIT_TOGGLE_TASK';


export const setTaskTitle = title => ({
  type: ADD_TASK,
  payload: title
})
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
