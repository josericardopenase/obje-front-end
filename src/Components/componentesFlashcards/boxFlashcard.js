import React from 'react'
import { Card, Button } from 'react-bootstrap';
import CheckboxCustom from './checkboxCustom';
import ThreeDots from './threeDots';
import Etiquetas from './etiquetas';
import { motion } from 'framer-motion';

function BoxFlashcard() {
    return (
        <label class="mr-4 ml-4">
        <motion.div  whileHover={{ scale: 1.05 }}
        animate={{ scale: 1}}>
            <Card style={{ width: '16rem' , border: "none", borderRadius: "0.5rem", backgroundColor: ""}} className="shadow mb-5 mt-5" >

                <Card.Body className>
                    
                    <div style={{marginBottom: "120px"}} className= "justify-content-between d-flex">
                        <CheckboxCustom></CheckboxCustom>
                        <ThreeDots></ThreeDots>

                        
                    </div>

                    <div className="d-flex mb-3">
                        <Etiquetas text="Aprendida"></Etiquetas>

                    </div>
                    <Card.Title><p style={{fontWeight: "700", fontSize: "26px"}}>Las matrices transpuesta</p></Card.Title>
                </Card.Body>
            </Card>
        </motion.div>
        </label>
    )
}

export default BoxFlashcard
