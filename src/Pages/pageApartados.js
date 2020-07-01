import React, { useEffect } from 'react'
import MensajeAsignatura from '../Components/componentesLecciones/mensajeAsignatura'
import SearchBar from '../Components/searchBar';
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

function PageApartados(props) {



    const DataBase = [
        {
            id: "25",
            nombre : "Penelope",
            time: "25h",
            contenido: "Hola me llamo juan asdffdsfasdfasd"

        },{
            id: "2",
            nombre : "Penelope2",
            time: "25h",
            contenido: "Hola me llamo juan jafsdlñlkfsd"
        },
        {
            id: "13",
            nombre : "Denelope20",
            time: "25h",
            contenido: "Hola me llamo juan franco"
        },
        {
            id: "15",
            nombre : "Eeres un cruck",
            time: "25h",
            contenido: "Hola me llamo juan francisco"
        }
    ]

    const leccion = props.match.params.leccionID;
    const [leccionActual, setLeccionActual] = useState(DataBase[0]);
    const [loading, setLoading] = useState(false);
    const [zoom, setZoom] = useState(false);
    const scrollYProgress = useViewportScroll();

    const ChangeLeccion = (id) => {

        //futuramente aqui habra un fetch.
        var leccion = DataBase.find(o => o.id === id)

        setLoading(true)
        setTimeout(function(){
            setLeccionActual(leccion)
            window.scrollTo(0, 0)
            setLoading(false)
        }, 600);


    }

    let classZoom;
    let classZoom1;

    if(!zoom){
        classZoom = "col-md-8  p-5"
        classZoom1 = "col-md-4 flex-column"
        
    }else{
        classZoom = "col-md-12  p-5 container"
        classZoom1 = "col-md-4 flex-column d-none"
    }
    

    return (

        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        exit={{opacity: 0}}
        >


           <div className="row">

               <div className={classZoom1}>
                    
                    <motion.div className="position-fixed" style={{width: "30%"}} initial={{opacity: 0, x: -400}}
                                animate={{ opacity: 1, x: 0}} exit={{opacity: 0, x: -400}}>   
                        
                        <MensajeAsignatura asignatura={leccion}></MensajeAsignatura>
                        
                        <ListaApartados database={DataBase} leccionActual = {leccionActual} onClick = {ChangeLeccion}></ListaApartados>
                    
                    </motion.div>
                   
                </div>

                   

               <motion.div className={classZoom}   initial={{opacity: 0, y: 400}} animate={{ opacity: 1, y: 0} } 
               exit={{opacity: 0, y: 400}} transition={{delay: "0.4"}} >

                   <motion.div  className="container" initial={{opacity: loading ? 0 : 1}} animate={{ opacity: loading ? 0 : 1}} transition={{duration: 0.4}}>
                        <video className="w-100 mb-4"  controls></video>
                        

                        <div className="row m-0 p-0">
                            <h1>{leccionActual.nombre}</h1>

                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="ml-4 bi bi-arrows-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => setZoom(!zoom)}>
                                <path fill-rule="evenodd" d="M1.464 10.536a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5z"/>
                                <path fill-rule="evenodd" d="M5.964 10a.5.5 0 0 1 0 .707l-4.146 4.147a.5.5 0 0 1-.707-.708L5.257 10a.5.5 0 0 1 .707 0zm8.854-8.854a.5.5 0 0 1 0 .708L10.672 6a.5.5 0 0 1-.708-.707l4.147-4.147a.5.5 0 0 1 .707 0z"/>
                                <path fill-rule="evenodd" d="M10.5 1.5A.5.5 0 0 1 11 1h3.5a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2h-3a.5.5 0 0 1-.5-.5zm4 9a.5.5 0 0 0-.5.5v3h-3a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5z"/>
                                <path fill-rule="evenodd" d="M10 9.964a.5.5 0 0 0 0 .708l4.146 4.146a.5.5 0 0 0 .708-.707l-4.147-4.147a.5.5 0 0 0-.707 0zM1.182 1.146a.5.5 0 0 0 0 .708L5.328 6a.5.5 0 0 0 .708-.707L1.889 1.146a.5.5 0 0 0-.707 0z"/>
                                <path fill-rule="evenodd" d="M5.5 1.5A.5.5 0 0 0 5 1H1.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 1 0V2h3a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                        </div>


                        <p className="w-100 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p className="w-100 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        
                    </motion.div>

               </motion.div>

           </div>

        </motion.div>
        
    )
}

export default PageApartados