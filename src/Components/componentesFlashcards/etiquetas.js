import React from 'react'

function Etiquetas(props) {

    if(props.aprendido === -1){
        return (
            <span  className="pt-1 pb-1 pl-2 pr-2 mr-2" style={{fontWeight: "700", fontSize: "15px", borderRadius: "0.3rem", backgroundColor: "#de0202", color:"#fcdede", height: "30px"}}>No aprendido</span>
        )
    }else if(props.aprendido === 0){
        return (
            <span  className="pt-1 pb-1 pl-2 pr-2 mr-2" style={{fontWeight: "700", fontSize: "15px", borderRadius: "0.3rem", backgroundColor: "#ffb900", color:"#ffedba", height: "30px"}}>Regular</span>
        )
    }else if(props.aprendido === 1){
        return (
            <span  className="pt-1 pb-1 pl-2 pr-2 mr-2" style={{fontWeight: "700", fontSize: "15px", borderRadius: "0.3rem", backgroundColor: "#7bc942", color:"#e5ffd1", height: "30px"}}>Aprendida</span>
        )
    } 
}

export default Etiquetas
