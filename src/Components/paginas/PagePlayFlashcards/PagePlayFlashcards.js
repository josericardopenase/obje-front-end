import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Base from '../../Containers/base'
import { Link } from 'react-router-dom'
import FlashcardPrimary from './componentesPlayFlashcards/flashcardPrimary'


function PagePlayFlashcards() {


    const flashcards = [
        {
            id: 1,
            titulo: "We can always use the -ing form for peresent continuous 124214",
            respuestas: [{respuesta: "true", color: "#27a5db"}, {respuesta : "false", color: "#db2727"}, {respuesta : "false", color: "#db2727"}  ],
            correcta: "False"
        },
        {
            id:2,
            titulo: "We can always use the -ing form for peresent continuous 12",
            respuestas: [{respuesta: "true", color: "#27a5db"}, {respuesta : "false", color: "#db2727"}, {respuesta : "false", color: "#db2727"}  ],
            correcta: "False"
        },
        {
            id:3,
            titulo: "We can always use the -ing form for peresent continuous 1",
            respuestas: [{respuesta: "true", color: "#27a5db"}, {respuesta : "false", color: "#db2727"}, {respuesta : "false", color: "#db2727"}  ],
            correcta: "False"
        }
        
    ]

    const [currentFlashCards, setCurrentFlashCards] = useState(flashcards)

    function passFlashcard(){
        setCurrentFlashCards(currentFlashCards.splice(0, currentFlashCards.length- 1))
    }


    return (
        <div>

            
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1, y: 0}}
        exit={{opacity: 0}}  >
            


                    <div style={{position: "fixed", top: 0, left: 0, marginLeft: "90px", marginTop: "1rem"}}><Link to="/flashcards" style={{zIndex: "900"}} ><img  src={process.env.PUBLIC_URL + '/close.png'} width="40px" height="40px"/></Link></div>
                    

                    

                    <AnimatePresence>
                    {
                        currentFlashCards.map((obj) => {

                            return (
                                <motion.div  drag key={obj.id}
                                dragConstraints={{ left: -10, right: 10, top: 5, bottom: 5 }}
                                dragElastic={0.2} initial = {{x: 1200, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 400, opacity: 0}} className="shadow" style={{borderRadius: "1rem", backgroundColor: "#f5f5f5", padding: "6rem 4rem", width: "80rem", height: "auto", transform: obj.rotation ? `rotate(90deg)` : "", position: "absolute", margin: "15rem 15rem"}}>
                                    <FlashcardPrimary rotation={obj.titulo === currentFlashCards[currentFlashCards.length -1 ].titulo ? false : true} onClick={passFlashcard} obj={obj}></FlashcardPrimary> 
                                </motion.div>

                            )
                        }
                        
                        )
                    }

                    </AnimatePresence>




                    

            
        </motion.div>
        




        
        </div>
    )
}

export default PagePlayFlashcards
