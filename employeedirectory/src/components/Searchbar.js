import React from 'react'

const Searchbar = (props) => {
    return (
        <div>
            <input type="text" onChange={props.functionThatHandlesTheChange} placeholder="Search your heart out"></input>
        </div>
    )
}

export default Searchbar
