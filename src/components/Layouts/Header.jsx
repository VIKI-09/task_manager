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


export default function Header (props) {
  const classes = useStyles();
  const logoutButton = ( <Tooltip title='Logout'>
    <IconButton onClick={props.userLogout}  size='small' color="inherit" >
        <ExitToAppIcon />
    </IconButton>
    </Tooltip>)

  return(  <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h2" className={classes.title} >
           TaskManager
        </Typography>
          {props.userStatus.loggedIn ? logoutButton : null }
        </Toolbar>
      </AppBar>
    )
  };
