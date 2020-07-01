import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { motion } from 'framer-motion';

function Leccion(props) {

    let {path, url} = useRouteMatch();

    const ruta = url+"/"+props.obj.nombre

    const progressBar = {
        width : "70%",
        height: "3px",
        backgroundColor: "#57330a",
    }

    const progressBarInside = {
        width : "50%",
        height: "3px",
        backgroundColor:  "white",
    }
    return (
                    
        <motion.div className="col-xl-3 col-lg-4 col-md-6 mt-4" whileHover={{scale: 1.02}}>
            <Link to={ruta} className=" text-decoration-none  align-items-stretch">
                <div className="card text-white border-0 w-100  mb-lg-0 position-relative " style={{backgroundColor: "#FF8800", borderRadius: "15px 15px"}}>
                    <div className="row p-3">
                        <div className="col-4">
                        <svg className="bi bi-egg w-100 h-100"viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15a5 5 0 0 0 5-5c0-1.956-.69-4.286-1.742-6.12-.524-.913-1.112-1.658-1.704-2.164C8.956 1.206 8.428 1 8 1c-.428 0-.956.206-1.554.716-.592.506-1.18 1.251-1.704 2.164C3.69 5.714 3 8.044 3 10a5 5 0 0 0 5 5zm0 1a6 6 0 0 0 6-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 0 0 6 6z"/>
                        </svg>
                        </div>

                        <div className="col-8">
                            
                                <h4 className=" card-title mb-0">{props.obj.nombre}</h4>
                                <p className="mb-3" style={{fontSize : "12px", fontWeight: "600"}}>50% completado</p>
                                <div className = "ml-1 ml-md-0 rounded-pill" style={progressBar}>
                                    <div className = "rounded-pill" style={progressBarInside}></div>
                                </div>

                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>

    )
}

export default Leccion
