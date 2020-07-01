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

        
        <motion.div className="col-xl-3 col-lg-4 col-md-6 mt-4"     whileHover={{ scale: 1.05 }}
 transition={{duration: 0.3}} initial={{opacity: 0, scale: 0.6}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.6}}>
            <Link to={ruta} className=" text-decoration-none  align-items-stretch">
                <div className="card text-white border-0 w-100  mb-lg-0 position-relative" style={{backgroundColor: props.obj.color1, borderRadius: "10px 10px"}}>
                    <div className="">

                        <div className="row text-right justify-content-end w-100 m-0">
                            <img src="" className="m-3" style={{fill: "white"}} alt="..." height="40px" width="40px"></img>
                        </div>
                        <div className=" row w-100 m-0">
                            <div className="ml-lg-4 ml-3 mb-lg-4 mb-3 w-100">
                                <h4 className=" card-title mb-0">{props.obj.titulo}</h4>
                                <p className="mb-3" style={{fontSize : "12px", fontWeight: "600"}}>50% completado</p>
                                <div className = "ml-1 ml-md-0 rounded-pill" style={progressBar}>
                                    <div className = "rounded-pill" style={progressBarInside}></div>
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
