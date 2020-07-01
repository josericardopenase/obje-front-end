import React, { useEffect } from 'react'
import { motion } from 'framer-motion'



function Bienvenido(props) {

    return (
        
        <motion.div className="pt-4" initial={{y: -130}} animate={{y:0}} exit={{y: -190}}>
            <h1 style={{fontSize: '54px'}}>
                Bienvenido de nuevo, <span style={{color: "#7BC942"}}> {props.name}</span>
            </h1>
            <h3 style={{fontSize: '39px'}}>
                ¿Qué quieres <span style={{color: "#7BC942"}}>aprender</span> hoy?
            </h3>
        </motion.div>
    )
}

export default Bienvenido
