import React from 'react'
import Leccion from './Leccion'

function ListaLecciones(props) {


    const lecciones = props.obj.lecciones.map((obj) =>{
        return (<Leccion obj = {obj}></Leccion>)
    })

    return (
        <div className="mt-5 pt-5">
                            <div className="d-flex mb-3">
                <h5 style={{whiteSpace: "nowrap", color: '#a6a6a6'}}>{props.obj.bloque}</h5>
                <div style={{height: "2px", backgroundColor: "#e6e6e6"}} className="w-100 mt-3 ml-2"></div>
                </div>

            <div className="row"> 
                {lecciones}
            </div>
        </div>
    )
}

export default ListaLecciones
