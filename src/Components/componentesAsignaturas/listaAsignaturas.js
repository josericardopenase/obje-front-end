import React from 'react'
import Asignatura from './asignatura'

const ListaAsignaturas = (props) => {

    const Lista = props.obj.slice(1, props.obj.length).map((_obj) => {
        return (
            <Asignatura obj = {_obj}></Asignatura>
        )
    })



    return (
        <div className="mt-4">
                <h5>{props.obj[0]}</h5>
                <div class="row">

                  {Lista}
                  


                </div>
        </div>
    )
}

export default ListaAsignaturas
