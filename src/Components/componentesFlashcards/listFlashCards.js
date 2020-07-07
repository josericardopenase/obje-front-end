import React from 'react'
import BoxFlashcard from './boxFlashcard'
import { Row } from 'react-bootstrap'

function ListFlashCards() {
    return (
        
        <div className="row mt-5">
            <div style={{position: "fixed"}}>
                <div className="pt-5">

                    <div className="ml-5">
                        <h3 style={{fontWeight: "700"}} className="mb-5">Topicos:</h3>
                        <h4 className="mt-3 pl-3 pr-3 pt-2 pb-2 text-white" style={{borderRadius: "0.5rem", backgroundColor: "#7bc942"}}>Matemáticas</h4>
                        <h5 className="mt-3 text-muted pl-3 pr-3 pt-1 pb-2" st>Lengua</h5>
                        <h5 className="mt-2 text-muted pl-3 pr-3 pt-1 pb-2">Inglés</h5>
                        <h5 className="mt-2 text-muted pl-3 pr-3 pt-1 pb-2">Historia </h5>
                    </div>
                </div>
            </div>
            <div style={{marginLeft: "300px"}}>
                <Row className="justify-content-center">
                
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>

                    <BoxFlashcard></BoxFlashcard>

                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>

                    <BoxFlashcard></BoxFlashcard>

                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>
                    <BoxFlashcard></BoxFlashcard>

                    <BoxFlashcard></BoxFlashcard>

                    <BoxFlashcard></BoxFlashcard>
                </Row>

            </div>
        </div>
    )
}

export default ListFlashCards
