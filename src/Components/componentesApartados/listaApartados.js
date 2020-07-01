import React from 'react'
import Apartado from './apartado'

function ListaApartados(props) {

    const listaApartados = props.database.map(obj =>{
        if(props.leccionActual.id === obj.id){
            return (<Apartado obj = {obj}  scroll={props.scroll} enabled={true}></Apartado>)
        }else{
            return (<Apartado obj = {obj} onClick={() => props.onClick(obj.id)} scroll={props.scroll} enabled={false}></Apartado>)
        }
    })

    return (
        <div>
            <h4 className="mt-5 mb-5">Apartados:</h4>

            {listaApartados}
         </div>
    )
}

export default ListaApartados
