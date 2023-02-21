import React from "react";

function TodoItem(props) {
    return (
        <li className="item">
            <div className="step">{props.step}</div>
            <div className="checkbox" >
                <input type="checkbox" onChange={props.onComplete} id={props.id} name={props.id} checked={props.completed ? "checked" : ""} />
                <label for={props.id}></label>
            </div>
            <p>
                {props.text}
            </p>
            <span className="removeItem" onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem }