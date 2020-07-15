import React, { useEffect } from 'react'
import MensajeAsignatura from '../Components/componentesLecciones/mensajeAsignatura'
import SearchBar from '../Components/componentesAsignaturas/searchBar';
import Apartado from '../Components/componentesApartados/apartado';
import  { useState} from 'react';
import ListaApartados from '../Components/componentesApartados/listaApartados';
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion";
import ScrollFillCircle from '../Components/componentesDecorativos/scrollFillCircle';
import { Tooltip } from 'react-bootstrap';
import TooltipCustom from '../Components/componentesDecorativos/tooltipCustom';
import Base from '../Containers/base';

function PageApartados(props) {



    const DataBase = [
        {
            id: "1",
            nombre : "Present perfect",
            time: "25h",
            contenido: "Hola me llamo juan asdffdsfasdfasd"

        },
        {
            id: "2",
            nombre : "Present continuous",
            time: "25h",
            contenido: "Hola me llamo juan jafsdlñlkfsd"
        },
        {
            id: "3",
            nombre : "Present continuous",
            time: "25h",
            contenido: "Hola me llamo juan jafsdlñlkfsd"
        },
        {
            id: "4",
            nombre : "Present continuous",
            time: "25h",
            contenido: "Hola me llamo juan jafsdlñlkfsd"
        },
        {
            id: "5",
            nombre : "Present continuous",
            time: "25h",
            contenido: "Hola me llamo juan jafsdlñlkfsd"
        }
    ]

    const leccion = props.match.params.leccionID;
    const [leccionActual, setLeccionActual] = useState(DataBase[0]);
    const [loading, setLoading] = useState(false);
    const [zoom, setZoom] = useState(false);
    const [scroll, setScroll] = useState(false);
    const scrollYProgress = useViewportScroll();

    const scrollXprogress = useViewportScroll();

    function ChangeLeccion(id){

        

        //futuramente aqui habra un fetch.
        var leccion = DataBase.find(o => o.id === id)


        setLoading(true)

        setTimeout(function(){
            setLeccionActual(leccion)
            window.scrollTo(0, 0)
            setLoading(false)
        }, 600);


    }


    return (

        <Base>
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        exit={{opacity: 0}}
        >


           <div className="row">

               <div onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)}  className={zoom ? "col-md-4 flex-column d-none" :  "col-md-3 flex-column mb-5" } style={{zInxed: "200" }}>
                    
                    <motion.div className="position-fixed mb-5" style={{width: "25%", overflowX: "hidden", overflowY: scroll ? "auto" : "hidden", height: "90vh"}} initial={{opacity: 0, x: -400}}
                                animate={{ opacity: 1, x: 0}} exit={{opacity: 0, x: -400}}>   
                        
                        <MensajeAsignatura asignatura={leccion}></MensajeAsignatura>
                        
                        <div className="row mt-4 justify-content-center">
                            <div className="pr-3 pl-3 pt-5 pb-5 mr-3 flex-column justify-content-center text-center" style={{width: "15rem !important", backgroundColor: "#f5f5f5", borderRadius: "1rem"}}>
                            <svg id="Capa_1" enable-background="new 0 0 512 512" height="82" viewBox="0 0 512 512" width="82"  fill="grey" xmlns="http://www.w3.org/2000/svg"><g><path d="m145.397 482h-29.681v30h280.569v-30h-29.681v-99.146h-221.207z"/><path d="m376.028 101.168v-31.012h-240.055v31.012h-92.77v15c0 62.959 44.661 116.642 105.422 128.793 15.233 30.394 42.992 53.462 76.467 62.391l-34.446 45.502h130.378l-34.39-45.427c33.598-8.875 61.467-31.988 76.742-62.465 60.76-12.15 105.422-65.834 105.422-128.793v-15h-92.77zm-301.717 30h61.661s.532 73.139 1.541 79.39c-33.415-13.104-57.834-43.352-63.202-79.39zm300.176 79.39c1.009-6.251 1.541-79.39 1.541-79.39h61.661c-5.369 36.038-29.787 66.286-63.202 79.39z"/><path d="m135.973 0h240.055v40.156h-240.055z"/></g></svg>

                            </div>

                            <div className="pr-3 pl-3 pt-5 pb-5 mr-3 flex-column justify-content-center text-center" style={{maxWidth: "15rem !important", backgroundColor: "#f5f5f5", borderRadius: "1rem"}}>
                                <h2>57%</h2>
                                <p>Completado</p>
                            </div>

                            <div className="pr-3 pl-3 pt-5 pb-5 mr-3 flex-column justify-content-center text-center" style={{width: "15rem !important", backgroundColor: "#f5f5f5", borderRadius: "1rem"}}>
                            <h3 className="mt-2">15/220</h3>
                                <p className="mb-0">monedas</p>
                            </div>

                            

                        </div>
                        <ListaApartados database={DataBase} leccionActual = {leccionActual} onClick = {ChangeLeccion}></ListaApartados>
                    
                    </motion.div>
                   
                </div>

                   

               <motion.div className={zoom ? "col-md-12 flex-column" : "col-md-9" }   initial={{opacity: 0, y: 400}} animate={{ opacity: 1, y: 0} } 
               exit={{opacity: 0, y: 400}} transition={{delay: "0.4"}} >

                   <motion.div  className="container p-5" initial={{opacity: loading ? 0 : 1, minWidth: "60%"}} animate={{ opacity: loading ? 0 : 1}} transition={{duration: 0.4}}>
                        <video className="w-100 mb-4"  src="https://www.youtube.com/watch?v=Lc6wyl1KdOc" controls></video>
                        

                        <div className="row m-0  justify-content-between">
                            <div>
                            <h4 className="text-muted">Triangles and Trigonometry</h4>
                            <h1 style={{fontWeight: "700"}}>Propiedades de los triangulos</h1>
                            </div>

                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="ml-4 bi bi-arrows-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => setZoom(!zoom)}>
                                <path fill-rule="evenodd" d="M1.464 10.536a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5z"/>
                                <path fill-rule="evenodd" d="M5.964 10a.5.5 0 0 1 0 .707l-4.146 4.147a.5.5 0 0 1-.707-.708L5.257 10a.5.5 0 0 1 .707 0zm8.854-8.854a.5.5 0 0 1 0 .708L10.672 6a.5.5 0 0 1-.708-.707l4.147-4.147a.5.5 0 0 1 .707 0z"/>
                                <path fill-rule="evenodd" d="M10.5 1.5A.5.5 0 0 1 11 1h3.5a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2h-3a.5.5 0 0 1-.5-.5zm4 9a.5.5 0 0 0-.5.5v3h-3a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5z"/>
                                <path fill-rule="evenodd" d="M10 9.964a.5.5 0 0 0 0 .708l4.146 4.146a.5.5 0 0 0 .708-.707l-4.147-4.147a.5.5 0 0 0-.707 0zM1.182 1.146a.5.5 0 0 0 0 .708L5.328 6a.5.5 0 0 0 .708-.707L1.889 1.146a.5.5 0 0 0-.707 0z"/>
                                <path fill-rule="evenodd" d="M5.5 1.5A.5.5 0 0 0 5 1H1.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 1 0V2h3a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                        </div>


                        <div className="mt-3">
                            
                            <div className="parrafo mt-5 text-muted">
                                <p style={{fontSize: "20px"}} className="text-muted">
                                                                        Let’s start simple: a triangle is a closed shape that has three sides (which are line segments
                                        A line segment is the part of a <span style={{borderBottom: "3px rgb(255, 136, 0) solid"}}>line</span> that lies between two points, without extending to infinity. We can label line segments from point A to point B as AB‾.

                                        Learn more…

                                        ) and three vertices (the <span style={{borderBottom: "3px rgb(255, 136, 0) solid"}}>points</span>
                                        . A point is a specific location in space. Points describe a position, but have no size or shape themselves.

                                        Learn more…

                                        where the sides meet). It also has three internal angles
                                        The internal angles of a polygon are the angles on the inside, at every vertex.

                                        , and we already know that the sum of them is always 180°.

                                        <TooltipCustom><span style={{borderBottom: "3px rgb(255, 136, 0) solid"}}>points</span></TooltipCustom>
                                        re the sides meet). It also has three internal angles
                                        The internal angles of a polygon are the angles on the inside, at every vertex.

                                        , and we already know that the sum of them is always 180°.
                                                                            
                                        
                                </p>

                            </div>
                            
                        </div>

                        
                        
                    </motion.div>

               </motion.div>

           </div>

        </motion.div>

        </Base>
        
    )
}

export default PageApartados