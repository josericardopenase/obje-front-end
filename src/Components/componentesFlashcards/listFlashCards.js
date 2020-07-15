import React, { useState } from 'react'
import BoxFlashcard from './boxFlashcard'
import { Row } from 'react-bootstrap'
import ListBoxFlashCards from './listBoxFlashCards'
import { act } from 'react-dom/test-utils'
import { motion, AnimatePresence } from 'framer-motion'
import Base from '../../Containers/base'
import { Link } from 'react-router-dom'

function ListFlashCards() {

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

    const [actualAsignatura, setActualAsignatura] = useState(datos[0])
    const [loading, setLoading] = useState(false);

    const [flashcardsAJugar, setFlashCardsAJugar] = useState([])

    const nextBarStyle = {

        width: "55%",
        heigth: "100",
        position: "fixed",
        bottom: 0,
        zIndex: "200",
        backgroundColor: "rgb(123, 201, 66)",
        padding: "0.7rem 1rem",
    }


    function añadirFlashCard(obj){

        //añade una flashcard dentro de las flashcards que quieres jugar
        console.log(flashcardsAJugar)
        
        if(!flashcardsAJugar.find(element => element.id === obj.id)){
            setFlashCardsAJugar(flashcardsAJugar.concat(obj))
        }else{
            setFlashCardsAJugar(flashcardsAJugar.filter(item => item.id !== obj.id))
        }
    }
    function isCheckedFlashcard(obj){
        //va a eliminar una flashcard según un objeto pasado por parametro
        return (flashcardsAJugar.find(element => element.id == obj.id))
    }


    function setAsignatura(id){
            const asignatura = datos.find(element => element.id === id)
            setLoading(true)

            setTimeout(function(){
                setActualAsignatura(asignatura)
                window.scrollTo(0, 0)
                setLoading(false)
            }, 600);
    }

    return (
    
        <div>
            <Base>
            <div className="row mt-5">
                <div className="col-md-3" style={{width: "20%", position: "fixed"}}>
                    <div>

                        <h1 className="mb-5">Ponte a prueba</h1>
                        <div>
                            <h3 style={{fontWeight: "700"}} className="mb-5">Asignatura:</h3>
                            {
                                datos.map((obj) => {
                                    if(obj.id === actualAsignatura.id){
                                        return <h5 onClick={() => setAsignatura(obj.id)} className="mt-3 pl-3 pr-3 pt-2 pb-2" style={{cursor: "pointer", fontSize: "20px", color: "white", backgroundColor: "rgb(123, 201, 66)", borderRadius: "0.4rem"}}>{obj.nombre}</h5>
                                    }else{
                                        return <motion.h5 onClick={() => setAsignatura(obj.id)} className="mt-3 text-muted pl-3 pr-3 pt-1 pb-2" style={{cursor: "pointer"}}>{obj.nombre}</motion.h5>

                                    }
                                }
                                )
                            }
                        </div>

                    </div>
                </div>


                <div className="col-md-9" style={{marginLeft: "400px"}}>
                    <Row className="" style={{opacity: loading ? 0 : 1, transition: "all 0.5s ease"}}>
                    
                        <ListBoxFlashCards obj={actualAsignatura} onChange = {añadirFlashCard} isChecked={isCheckedFlashcard}></ListBoxFlashCards>

                    </Row>

                </div>

            </div>
            </Base>
            <div className="w-100 row justify-content-center">
            <AnimatePresence>

            { flashcardsAJugar.length > 0  ? (

                    <motion.div key="myFriend" style={nextBarStyle} className="row justify-content-between mb-3 rounded-pill" initial= {{y: 400, opacity: 0}} animate = {{y:0 , opacity: 1}} exit={{y:400, opacity: 0}} transition={{duration: "1"}}>
                        <motion.div initial={{scale: 0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 0.4}} className="d-flex flex-column justify-content-center">

                                    <div className="row ml-1">
                                    <svg onClick = {() => setFlashCardsAJugar([])} className="mt-1" height="15px" viewBox="0 0 329.26933 329" width="15px" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                                    
                                    <span className="ml-3 text-white pl-2 pr-2 " style={{backgroundColor:"#4E8724", borderRadius:"0.8rem"}}>{flashcardsAJugar.length}</span>
                                    <div className="text-white ml-3">temas seleccionados</div>
                                    </div>


                        </motion.div>

                        <motion.div initial={{scale: 0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 0.5}} className="row" style={{marginLeft: "-5rem"}}>
                            
                            <motion.div   style={{backgroundColor: "white", color: "black", fontSize: "18px", cursor: "pointer", border: "1px white solid", borderRadius: "9rem", padding: "0.5rem 2.2rem"}}>
                                    Examen

                            </motion.div>

                            <motion.div   style={{backgroundColor: "white", color: "black", fontSize: "18px", cursor: "pointer", border: "1px white solid", borderRadius: "9rem", padding: "0.5rem 2.2rem"}} className="ml-3">
                                    Flashcard

                            </motion.div>
                        </motion.div>

                        
                        <motion.div  initial={{scale: 0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 0.6}}>
                            
                            <Link to="/flashcards/1">
                            <motion.div   whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} style={{backgroundColor: "white", color: "black", fontSize: "18px", cursor: "pointer", border: "1px white solid", borderRadius: "9rem", padding: "0.5rem 2.2rem"}}>
                                    Jugar

                            </motion.div>
                            </Link>
                        </motion.div>

                    </motion.div>
                   
                )
                :
                (
                    <div/>
                )

            }

            </AnimatePresence>
            </div>
        </div>
    )
}

export default ListFlashCards
