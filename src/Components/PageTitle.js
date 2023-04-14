import React from "react";
import "../css/mainTitle.css";
import { BsListCheck } from "react-icons/bs";

function PageTitle() {
    return (
        <h1>
            Welcome to TODO App <BsListCheck />
        </h1>
    );
}


export { PageTitle }