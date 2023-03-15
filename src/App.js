//import logo from './logo.svg';
import './App.css';
import './css/Main.css';
import React from 'react';
import { AppUI } from './Components/AppUI';
import { TodoProvider } from './TodoContext';

// const DefaultTodos = [
//   { text: 'tets 1', completed: true, step: 1 },
//   { text: 'tets 2', completed: false, step: 2 },
//   { text: 'tets 3', completed: false, step: 3 }
// ];



function App(props) {
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
      );
}

export default App;

