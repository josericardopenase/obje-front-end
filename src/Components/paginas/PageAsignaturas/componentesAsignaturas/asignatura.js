import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function Asignatura(props) {

    const progressBar = {
        width : "70%",
        height: "3px",
        backgroundColor: props.obj.color2,
    }

    const progressBarInside = {
        width : "50%",
        height: "3px",
        backgroundColor: "white",
    }


    const ruta = "/"+props.obj.titulo;

    return (

        
        <motion.div className="col-xl-3 col-lg-6 col-md-6 mt-4 overflow-hidden"     whileHover={{ scale: 1.05 }}
 transition={{duration: 0.3}} initial={{opacity: 0, scale: 0.6}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.6}}>
            <Link to={ruta} className=" text-decoration-none  align-items-stretch">
                <div className="card text-white border-0 w-100  mb-lg-0 position-relative" style={{background: `linear-gradient(to bottom right, ${props.obj.color1}, ${props.obj.color2})`, borderRadius: "25px"}}>
                    <div className="row">

                        <div className="col-4 ">

                            <img src={process.env.PUBLIC_URL + '/'+props.obj.imagen} className="m-3 w-100 p-xl-3" style={{fill: "white"}} alt="..."></img>
                            <img src={process.env.PUBLIC_URL + '/'+props.obj.imagen} className="m-3" style={{fill: "white", position: "absolute", top: "-20%", left: "-20%", opacity: 0.1}} height="200px" width="200px" alt="..."></img>

                        </div>
        
                        <div className="col-8">
                            <div className="d-flex flex-column justify-content-center h-100">
                                <div className="w-100 justify-content-center">
                                <h4 className=" card-title mb-0">{props.obj.titulo}</h4>
                                <p className="mb-3" style={{fontSize : "12px", fontWeight: "600"}}>50% completado</p>
                                <div className = "ml-1 ml-md-0 rounded-pill" style={progressBar}>
                                    <div className = "rounded-pill" style={progressBarInside}></div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </motion.div>

    )

}

export default Asignatura
