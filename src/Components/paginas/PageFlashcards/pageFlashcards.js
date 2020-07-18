import React from 'react'
import { motion } from 'framer-motion'
import ListFlashCards from './componentesFlashcards/listFlashCards'


function PageFlashcards() {

    const datos = [
        {
            id: 1,
            nombre: "Inglés",
            listaFlashcards : [
                {
                    titulo: "Tema 1: Tenses",
                    flashcards: [
                        {
                            id: 1,
                            nombre: "Present tenses",
                            aprendido: 0
                        },
                        {
                            id: 2,
                            nombre: "Past tenses",
                            aprendido: -1,
                        },
                        {
                            id: 3,
                            nombre: "Future tenses",
                            aprendido: 0
                        },
                        {
                            id: 4,
                            nombre: "Present perfect",
                            aprendido: 1
                        }
                    ]
                }

            ]
        },
        {
            
            id: 2,
            nombre: "Física",
            listaFlashcards : [
                {
                    titulo: "Tema 1: gravitacion",
                    flashcards: [
                        {
                            id: 5,
                            nombre: "Peneloe",
                            aprendido: 1
                        },
                        {
                            id: 6,
                            nombre: "Matriz inversa",
                            aprendido: 1
                        },
                        {
                            id: 7,
                            nombre: "Matriz inversa",
                            aprendido: 1
                        },
                        {
                            id: 8,
                            nombre: "Matriz inversa",
                            aprendido: 1
                        },
                        {
                            id: 9,
                            nombre: "Matriz inversa",
                            aprendido: 0
                        }
                    ]
                },
                {
                    titulo: "Tema 2: electromagnetismo",
                    flashcards: [
                        {
                            id: 10,
                            nombre: "Mentiras",
                            aprendido: -1
                        },
                        {
                            id: 11,
                            nombre: "Mentiras2",
                            aprendido: 1
                        }
                    ]
                }

            ]
        }
    ]

    return (

            <motion.div         initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{duration: 0.6}}
            exit={{opacity: 0}}>


                
                <ListFlashCards db = {datos}></ListFlashCards>


            </motion.div>

    )
}

export default PageFlashcards
