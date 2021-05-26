import React from 'react';


const SortButton = (props) => {
    return(
        <div>
            <button className="button" onClick={props.fn} >Sort by Name</button>
        </div>
    )
}

export default SortButton;