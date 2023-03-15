import React from "react";

import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoContext } from "../TodoContext";

function AppUI() {
    const { error, loading, searchedTodos, completedTodos, deleteTodo, changeTodoStatus } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p> ¡¡ERROR!!</p>}
                {loading && <p>Cargando....</p>}
                {(!loading && !searchedTodos.length) && <p>¡¡crea tu primer todo!!</p>}
                {searchedTodos.map(
                    function (todo, index) {
                        return <TodoItem
                            key={todo.text}
                            text={todo.text}
                            step={todo.step}
                            id={index}
                            completed={todo.completed}
                            onComplete={() => changeTodoStatus(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    })}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment >

    );
}

export { AppUI }