//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { CreateTodoButton } from './Components/CreateTodoButton'
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import './css/Main.css';

const DefaultTodos = [
  { text: 'tets 1', completed: true, step: 1 },
  { text: 'tets 2', completed: false, step: 2 },
  { text: 'tets 3', completed: false, step: 3 }
];

function App(props) {

  const [todos, setTodos] = React.useState(DefaultTodos);
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

  const changeTodoStatus = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    console.log("setting value to ", newTodos[todoIndex].completed === true ? false : true)
    newTodos[todoIndex].completed = newTodos[todoIndex].completed === true ? false : true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    console.log("removing element",todoIndex)
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(
          function (todo, index) {
             return <TodoItem 
             key={todo.text} 
             text={todo.text} 
             step={todo.step} 
             id={index} 
             completed={todo.completed}
             onComplete={()=>changeTodoStatus(todo.text)}
             onDelete={()=>deleteTodo(todo.text)}
             /> 
             })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

