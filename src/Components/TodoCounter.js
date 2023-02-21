import React from "react";

function TodoCounter({total, completed}){
    return(
        <h2 id="counter">{completed} of {total} task completed</h2>
    );
}

export {TodoCounter}