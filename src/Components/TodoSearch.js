import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const { searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onChangeText = (event) =>{
        setSearchValue(event.target.value);
    }
    return (
        <div id="searchContainer">
            <input 
            id="searchBar"
            placeholder='Search Todo'
            onChange={onChangeText}
            autoComplete="off"
            />
        </div>
    );
}

export { TodoSearch }