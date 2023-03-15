import React from "react";

import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

function AppUI({totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, changeTodoStatus, deleteTodo, loading, error}) {
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
        </React.Fragment>

    );
}

export { AppUI }