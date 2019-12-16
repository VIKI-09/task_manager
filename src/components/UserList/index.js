import React,{useEffect} from 'react';
import Loader from './Loader';
import TabsPanel from './TabsPanel'
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Context from './Context';
import axios from 'axios';
  const API_URL = 'https://jsonbox.io/box_7da87468ab6c10280254/todos';

export default function UserList(){
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [category, setCategory] = React.useState('all')

  useEffect(() => {
  axios.get(API_URL)
  .then(res => {
    const todos = res.data;
    setTodos( todos );
    setLoading(false);
  })
  }, []);
  //updating data
  // useEffect(() => {
  //  setInterval(() => {  axios.get(API_URL)
  //    .then(res => {
  //      const todos = res.data;
  //      setTodos( todos );
  //    })
  //  }, 5000)
  // }, []);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed

      }
      return todo
    }))
  };

  function addTodoItem (title) {
  setTodos(todos.concat([{
    title: title,
    id: Date.now(),
    completed: false,
    editMode: false
  }
  ]))
  }

  function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
  }

  function editToggle(id){
   setTodos(todos.map(todo => {
     if(todo.id === id){
       todo.editMode = true
     }
  return todo
   }))
  }

  function editTodo(id, value) {
  setTodos(todos.map(todo => {
    if(todo.id === id){
      todo.title = value
      todo.editMode = false
      todo.completed = false
    }
    return todo
  }))
  }

  function changeCategory (index){
  if (index === 0){
    setCategory('all')
  }else if(index === 1){
    setCategory('active')
  }else {
      setCategory('completed')
  }
  }

  return (
    <Context.Provider value={{removeTodo, editToggle, editTodo}}>
          <AddTodo onCreate={addTodoItem} />
          {loading && <Loader/>}
          {todos.length ?( <TodoList todos={todos} category={category}  onToggle={toggleTodo} /> ): (loading ? null : <p>Todo list is empty</p>)}
           <TabsPanel onSelect={changeCategory} />
      </Context.Provider>
    );


}
