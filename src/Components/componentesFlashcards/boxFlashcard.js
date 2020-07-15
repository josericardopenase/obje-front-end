import React from 'react'
import { Card, Button } from 'react-bootstrap';
import CheckboxCustom from './checkboxCustom';
import ThreeDots from './threeDots';
import Etiquetas from './etiquetas';
import { motion } from 'framer-motion';

function BoxFlashcard(props) {
    const ch = props.checked();
    return (
        <label onChange = {props.onChange} class="mr-4 ml-4">
        <motion.div  whileHover={{ scale: 1.05 }}
        animate={{ scale: 1}}>
            <Card style={{ width: '16rem' , border: "none", borderRadius: "0.5rem", backgroundColor: "", heigth: "100%"}} className=" shadow mb-5 mt-5" >

                <Card.Body className>
                    
                    <div style={{marginBottom: "120px"}} className= "justify-content-between d-flex">
                        <CheckboxCustom checked = {props.checked()}></CheckboxCustom>
                        <ThreeDots></ThreeDots>

                        
                    </div>

                    <div className="d-flex mb-3">
                        <Etiquetas aprendido={props.obj.aprendido}></Etiquetas>

                    </div>
                    <Card.Title><p style={{fontWeight: "700", fontSize: "26px"}}>{props.obj.nombre}</p></Card.Title>
                </Card.Body>
            </Card>
        </motion.div>
        </label>
    )
}

export default BoxFlashcard
