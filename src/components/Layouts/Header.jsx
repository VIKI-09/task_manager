import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    borderRadius: '5px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));



export default function Header (props) {
  const classes = useStyles();

  return(  <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h2" className={classes.title} >
           TaskManager
        </Typography>
        <Button size='small' color="inherit" >
            Logout
        </Button>
        </Toolbar>
      </AppBar>
    )
  };


    // <Button  color="inherit">Logout</Button>
