import React, { useEffect } from 'react';
import TaskManager from '../Components/TaskManager';
import {connect } from 'react-redux';
import {addTask, setTaskComplete, removeTask, setNewTaskTitle, setTaskForEdit, getTasks} from '../store/TaskManager/actions'


const TaskManagerContainer = (props) => {

useEffect(() => {props.getTasks(); console.log('GETTING TASTk')}, [])


  return (
    <TaskManager
    taskListData={props.taskListData}
    addTask={props.addTask}
    completeToggleTask={props.setTaskComplete}
    editToggleTask={props.setTaskForEdit}
    editTask={props.setNewTaskTitle}
    removeTask={props.removeTask}
    getTasks={props.getTasks}


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
  setTaskForEdit,
  getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManagerContainer);
