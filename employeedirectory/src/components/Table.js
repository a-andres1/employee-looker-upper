import React from 'react'

const Table = (props) => {
    return (
        <div>
            {props.employees.map( element => (
                <h2>{element.name.first}</h2>
            ))}
        </div>
    )
}

export default Table
