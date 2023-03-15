import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const { totalTodos: total, completedTodos: completed } = React.useContext(TodoContext);
    return (
        <h2 id="counter">{completed} of {total} task completed</h2>
    );
}

export { TodoCounter }