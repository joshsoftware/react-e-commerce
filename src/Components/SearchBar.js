import React from 'react'

function SearchBar(props) {
    return (
        <>
         <input type="text"
                placeholder={props.placeholder}
                onChange={props.handleChange}>
        </input> 
        </>
    )
}

export default SearchBar;