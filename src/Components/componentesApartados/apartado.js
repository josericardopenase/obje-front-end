import React from 'react'
import ScrollFillCircle from '../componentesDecorativos/scrollFillCircle'
import { motion } from 'framer-motion'

function Apartado(props) {
    
    return (
        <div onClick={props.onClick} className="text-left bg-light overflow-hidden mb-3 mr-3 " style={{borderRadius: "1rem"}}>
                   
        <div className="row pt-3 pb-3 pl-3 pr-3 " style={{cursor: !props.enabled ? "pointer" : ""}}>
            
            {/* TITULO */}

            <div className="col-xl-2 col-lg-3 col-md-4 col-4">
                <div className="ml-1" style={{backgroundColor: "#8605B9", width: "55px", height:"55px",  borderRadius: "0.5rem"}}>
                    <div className="h-100 d-flex justify-content-center" >
                        <div className="flex-column h-100 justify-content-center d-flex text-left">

                            <h4 className="text-white m-0" style={{fontWeight: "700"}}>{props.obj.nombre.charAt(0)}</h4>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-8 col-lg-7 col-md-6 col-8 ">
                    <h5 style={{fontWeight: "700"}}>{props.obj.nombre}</h5>
                    <p className="mb-0" style={{fontSize: "13px"}}>{props.obj.time}</p>
            </div>

            <div className="col-2 ">

                
        </div>

            

            </div>


        

            {props.enabled === true ? (
            <motion.div className="w-100 " style={{height: "4px", backgroundColor: "#8605B9"}}></motion.div>

            ) : (
                <div></div>
            )}
       </div>
    )
}

export default Apartado
