import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function StartScreen() {
  return(
    <div className='start-screen'>
      <Typography>
        Task Manager
      </Typography>
      <Button>Login</Button>
      <Button>SignUp</Button>
    </div>
  )
}
