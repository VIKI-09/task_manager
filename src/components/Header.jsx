import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
export default function Header () {
  return(  <AppBar position="static" style={{borderRadius: '5px'}}>
      <Toolbar>
        <Typography variant="h2" >
           TaskManager
        </Typography>
         <Button  color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
  };
