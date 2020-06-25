import React from 'react'

function Bienvenido(props) {
    return (
        <div className="pt-4">
            <h1>
                Bienvenido denuevo, <span style={{color: "#7BC942"}}> {props.name}</span>
            </h1>
            <h3>
                ¿Qué quieres <span style={{color: "#7BC942"}}>aprender</span> hoy?
            </h3>
        </div>
    )
}

export default Bienvenido
