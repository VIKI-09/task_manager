import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
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

const  temp = () => {
  console.log('clicked')
}

export default function Header (props) {
  const classes = useStyles();

  return(  <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h2" className={classes.title} >
           TaskManager
        </Typography>
        <Tooltip title='Logout'>
        <IconButton onClick={temp}  size='small' color="inherit" >
            <ExitToAppIcon />
        </IconButton>
        </Tooltip>
        </Toolbar>
      </AppBar>
    )
  };


    // <Button  color="inherit">Logout</Button>
