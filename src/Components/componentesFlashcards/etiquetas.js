import React from 'react'

function Etiquetas(props) {

    return (
        <span  className="pt-1 pb-1 pl-2 pr-2 mr-2" style={{fontWeight: "700", fontSize: "15px", borderRadius: "0.3rem", backgroundColor: "#7bc942", color:"#e5ffd1"}}>{props.text}</span>
    )
}

export default Etiquetas
