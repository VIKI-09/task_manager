import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'


function TodoList(props) {

  let todosA = props.todos.filter(todo => todo.completed === false)
  let todosC = props.todos.filter(todo => todo.completed === true)
  return (<div className='wrapper'>
    <List > {(props.category === 'all')?(props.todos.map((todo) => {

      return  <TodoItem todo={todo} key={todo.id}  onChange={props.onToggle} />}
    )):(props.category === 'active')?(todosA.map((todo) => {

      return  <TodoItem todo={todo} key={todo.id}  onChange={props.onToggle} />}
    )): (props.category === 'completed') ? (todosC.map((todo) => {

      return  <TodoItem todo={todo} key={todo.id}  onChange={props.onToggle} />}
    )): null }


    </List>
  </div>)

}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;
