import React from "react";

function CreateTodoButton(props) {
    const onClickBtn = ()=>{
        props.setOpenModal(true);
    }
    return (
        <button
            onClick={onClickBtn}
            id="addTodo"
        >
            +
        </button>
    );
}

export { CreateTodoButton }