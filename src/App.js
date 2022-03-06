import logo from './logo.svg';
import './App.css';
import Todotable from './components/Todolist';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);

  }

  return (
    <div>
      <input type="text" onChange={inputChanged}  name="description" value={todo.description}/>
      
      <input type="text" onChange={inputChanged}  name="date" value={todo.date}/>
      <button onClick={addTodo}>Add</button>
    
         <Todotable todos={todos} />
    </div>
  );
};

export default App;
