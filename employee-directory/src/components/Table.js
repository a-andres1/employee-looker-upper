import React, {useEffect} from 'react'

const Table = (props) => {
    useEffect(() => {
        console.log('check')
    })
    return (
        <div>
            {props.employees.map((element, i) => (
                <>
                    <div key={i} className="card" style={{justifyContent: "center", maxWidth: "400px", float: "right", margin: "10pt"}}>
                        <div className="card-image">
                            <figure className="image" style={{margin: "10pt"}}>
                                <img src={element.picture.medium} style={{maxWidth: "100px", maxHeight: "100px"}} alt=""/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                 <div className="media-content">
                                    <p className="title is-4">{element.name.first} {element.name.last}</p>
                                    <p className="subtitle is-6">Located in: {element.location.city}, {element.location.state}</p>
                                    <p className="subtitle is-6">Email: {element.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </>

            ))}
        </div>
    )
}

export default Table
