import React from 'react'

function Base(props) {

    return (
        <div className="main-page" style={{ marginRight: "80px", marginTop: "50px",   marginLeft: "120px"}}>
            {props.children}
        </div>
    )
}

export default Base