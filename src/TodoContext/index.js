import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
    } = useLocalStorage("todosList", []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        console.log("removing element", todoIndex)
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({text: text, completed: false, step: 1})
        console.log("pushing an todo");
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            changeTodoStatus,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider}