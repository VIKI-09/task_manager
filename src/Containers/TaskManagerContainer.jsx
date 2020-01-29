import React from 'react';
import TaskManager from '../Components/TaskManager';
import {connect } from 'react-redux';
import {addTask, setTaskComplete, removeTask, setNewTaskTitle, setTaskForEdit} from '../store/TaskManager/actions'


const TaskManagerContainer = (props) => {

  return (
    <TaskManager
    taskListData={props.taskListData}
    addTask={props.addTask}
    completeToggleTask={props.setTaskComplete}
    editToggleTask={props.setTaskForEdit}
    editTask={props.setNewTaskTitle}
    removeTask={props.removeTask}


    />
  )
}


const mapStateToProps = (state) => {
  return{
    taskListData: state.taskManager
  }
}

const mapDispatchToProps = {
  addTask,
  setTaskComplete,
  removeTask,
  setNewTaskTitle,
  setTaskForEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManagerContainer);
