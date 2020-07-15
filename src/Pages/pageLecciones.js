import React, { useEffect } from 'react'
import MensajeAsignatura from '../Components/componentesLecciones/mensajeAsignatura';
import Leccion from '../Components/componentesLecciones/Leccion';
import ListaLecciones from '../Components/componentesLecciones/listaLecciones';
import {
    BrowserRouter as Router,

    useParams
  } from "react-router-dom";
import { motion } from 'framer-motion';
import {notificacion} from '../Components/KnowleadgeOwl/owlNotifications';
import Base from '../Containers/base';

function PageLecciones(props) {


    const asignatura = props.match.params.asignaturaID;


    const fetchInfo = [
        {
            bloque : "Bloque 1: Grammar",
            lecciones : [
                {
                    nombre: "Present tenses"
                },{
                    nombre: "Past tenses"
                },
                {
                    nombre: "Future tenses"
                },
                {
                    nombre: "Perfect tenses"
                }
            ]
        },
        {
            bloque : "Bloque 2: writing",
            lecciones : [
                {
                    nombre: "Letter"
                },
                {
                    nombre: "E-mail"
                },
                {
                    nombre: "Essay"
                },{
                    nombre: "Pros and cons"
                }
            ]
        }
    ]



    return (

        <Base>
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1}}
        exit={{opacity: 0}}  >

            <MensajeAsignatura asignatura = {asignatura}></MensajeAsignatura>
            
                <div className="">
                
                    {
                        fetchInfo.map(obj => <ListaLecciones obj={obj}></ListaLecciones>)
                    
                    }
                

                </div>

            </motion.div>
            </Base>
        
    )
}



export default PageLecciones

