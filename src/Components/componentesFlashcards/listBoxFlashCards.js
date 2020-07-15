import React from 'react'
import BoxFlashcard from './boxFlashcard'

function ListBoxFlashCards(props) {

    

    return (
        <div>
        <h1 className="mb-5">{props.obj.nombre}</h1>
        {props.obj.listaFlashcards.map((obj)=> <div>
            <div className="d-flex mb-1">
                <h5 style={{whiteSpace: "nowrap", color: "#7a7a7a"}}>{obj.titulo}</h5>
                <div style={{height: "2px", backgroundColor: "#e6e6e6"}} className="w-100 mt-3 ml-2"></div>
            </div>
            {
                obj.flashcards.map((obj) => <BoxFlashcard obj = {obj} onChange = {() => props.onChange(obj)} checked={() =>  { return props.isChecked(obj) ? true : false } }></BoxFlashcard>)
            }
            <br/>
            
        </div>)}

        </div>
    )
}

export default ListBoxFlashCards
