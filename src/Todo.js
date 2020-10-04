import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase.js';

function Todo({todo}) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={todo.todo} secondary="Expiry Date 📅"></ListItemText>
            </ListItem>
            <button onClick={event=> db.collection('todos').doc(todo.id).delete()}>Delete Me</button>
        </List>
    )
}

export default Todo;
