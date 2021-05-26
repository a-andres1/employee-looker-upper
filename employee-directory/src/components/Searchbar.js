import React from 'react'

const Searchbar = (props) => {
    return (
        <div>
            <input type="text" onChange={props.functionThatHandlesTheChange} placeholder="Search by first name"></input>
        </div>
    )
}

export default Searchbar
