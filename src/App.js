//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { AppUI } from './Components/AppUI';
import './css/Main.css';

// const DefaultTodos = [
//   { text: 'tets 1', completed: true, step: 1 },
//   { text: 'tets 2', completed: false, step: 2 },
//   { text: 'tets 3', completed: false, step: 3 }
// ];

function App(props) {
  const storageTodos = localStorage.getItem("todosList");
  let parsedTodos;
  if(!storageTodos){
    localStorage.setItem("todoslist", "[]");
    parsedTodos = [];

  }else{
    parsedTodos = JSON.parse(storageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    const currentSearch = searchValue.toLowerCase();
    searchedTodos = todos.filter(Element => {
      return Element.text.toLowerCase().includes(currentSearch);
    })
  }

  const saveTodos = function(newTodos){
    const todosStr = JSON.stringify(newTodos);
    localStorage.setItem("todosList", todosStr);
    setTodos(newTodos);
  }

  const changeTodoStatus = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    console.log("setting value to ", newTodos[todoIndex].completed === true ? false : true)
    newTodos[todoIndex].completed = newTodos[todoIndex].completed === true ? false : true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    console.log("removing element",todoIndex)
    saveTodos(newTodos);
  }

  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    changeTodoStatus={changeTodoStatus}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

