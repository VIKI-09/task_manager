import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm  ({todo, onEdit}) {



const [value, setValue] = useState('')
  function submitHandler(event) {
    event.preventDefault();
      onEdit(todo.id, value);
    }





       return( <form style={{width: '100%'}}  onSubmit={submitHandler}>
           <TextField

    id="filled-full-width"
    label="Editing Todo"
    style={{ margin: 8 }}
    onChange={event => setValue(event.target.value) }
    defaultValue={todo.title}
    // helperText="Full width!"
    fullWidth
    autoFocus
    margin="normal"
    variant="filled"
    InputLabelProps={{
      shrink: true,
    }}
  />
 </form>
      )
    };

//
// editTodo = (id, title) => {
//     axios.put(`http://localhost:3000/todos/${id}`,
//       {
//         title
//       },
//     )
//       .then(({data}) => {
//       setTodos(prevSate => {
//           const { todos } = prevSate;
//           const oldTodoIndex = todos.findIndex(todo => todo.id === data.id )
//           const newTodo = {...todos[oldTodoIndex], ...data}
//           todos.splice(oldTodoIndex, 1, newTodo)
//
//           return {todos: todos}
//         })
//
//       })
//       .catch(error => console.log(error))
//   }
