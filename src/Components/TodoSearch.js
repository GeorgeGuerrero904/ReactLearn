import React from "react";

function TodoSearch({ searchValue, setSearchValue}) {
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