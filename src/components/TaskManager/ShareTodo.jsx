import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { userService } from  '../../services/userService'
import { blue } from '@material-ui/core/colors';


export default function ShareDialog ({open, onClose}) {

  const classes = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


const [emails, setEmails] = useState([])

useEffect(() => {
  userService.getUsersEmails()
          .then(
               data => { setEmails(data) },
               error =>{ setEmails(['Users list is empty'])}
           )
})

 const handleClose = value => {
   onClose(value)
 }
 const handleListItemClick = value => {
   onClose(value);
 };
    return ( <Dialog onClose={handleClose} aria-labelledby="share-dialog" open={open}>
              <DialogTitle id="share-dialog">Share to </DialogTitle>
                <List>
                    {emails.map(email => (
                      <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                          <Avatar className={classes.avatar}>
                            <PersonIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                      </ListItem>
                    ))}
                  </List>
            </Dialog>
          );
}
