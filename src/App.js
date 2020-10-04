import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo.js'
import db from './firebase.js'
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app load , we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    // this code fire when the app.js load, it will call only once
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //snapshot basically take the sanpshot if something change in the databse
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Welcome to Todo-App</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} color="primary" type="submit" variant="contained" onClick={addTodo}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo =>(
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;


// live url https://todo-clone-88cd2.web.app/
