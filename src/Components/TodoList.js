import react from "react";

function TodoList(props){
    return(
        <section id="Todos">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};