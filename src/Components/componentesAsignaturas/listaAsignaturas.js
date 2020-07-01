import React from 'react'
import Asignatura from './asignatura'

const ListaAsignaturas = (props) => {

    const Lista = props.obj.slice(1, props.obj.length).map((_obj) => {
        return (
            <Asignatura obj = {_obj}></Asignatura>
        )
    })



    return (
        <div className="mt-5 mb-3 pt-5 ">
                <div className="d-flex mb-3">
                <h5 style={{whiteSpace: "nowrap", color: "#7a7a7a"}}>{props.obj[0]}</h5>
                <div style={{height: "2px", backgroundColor: "#e6e6e6"}} className="w-100 mt-3 ml-2"></div>
                </div>
                <div className="row">

                  {Lista}
                  


                </div>
        </div>
    )
}

export default ListaAsignaturas
