import React from "react";
import '../css/Modal.css'
import { TodoContext } from "../TodoContext";

function Modal({ children, setOpenModal }) {

    const [addText, setAddText] = React.useState('');
    const {addTodo} = React.useContext(TodoContext);
    const CloseModal = (event) => {
        setOpenModal(false);
    }
    const addTodoItem = () => {
        addTodo(addText);
        setOpenModal(false);
    }

    const changeText = (event) =>{
        console.log("changing text to", event.target.value);
        setAddText(event.target.value);
    }
    return (
        <div className="modal-Container">
            {children}
            <div id="container">
                <h3>Add a TODO</h3>
                <textarea id="textA" onChange={changeText}></textarea>
                 <div id="buttonsPlacer">
                    <button className="modal-button" onClick={addTodoItem}>add</button>
                    <button className="modal-button" onClick={CloseModal}>cancel</button>
                </div>
            </div>
        </div>
    );
}
export { Modal };