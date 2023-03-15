import React from "react";

import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoContext } from "../TodoContext";

function AppUI() {

    
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({error, loading, searchedTodos, completedTodos, deleteTodo, changeTodoStatus}) => {
                    return (
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
                    );
                }}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>

    );
}

export { AppUI }