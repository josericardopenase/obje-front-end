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

function PageLecciones(props) {


    const asignatura = props.match.params.asignaturaID;


    const fetchInfo = [
        {
            bloque : "Bloque 1: Algebra",
            lecciones : [
                {
                    nombre: "matriz"
                },
                {
                    nombre: "la recta"
                },
                {
                    nombre: "el plano"
                },
                {
                    nombre: "Penelope"
                }
            ]
        },
        {
            bloque : "Bloque 2: Mentiras",
            lecciones : [
                {
                    nombre: "mentira1"
                },
                {
                    nombre: "mentira2"
                },
                {
                    nombre: "mentira3"
                },{
                    nombre: "mnt"
                }
            ]
        }
    ]



    return (
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
        
    )
}



export default PageLecciones

