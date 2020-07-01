import React from 'react'
import { motion } from 'framer-motion'

const Message = (props) => {

    const messageStyle = {
        maxWidth: "16rem",
        width: "fit-content",
        padding: "0.6rem 1.5rem",
        backgroundColor: props.sender ? "rgb(123, 201, 66)" : "white",
        borderRadius: props.sender ? "2rem 2rem 0.5rem 2rem" : "2rem 2rem 2rem 0.5rem"
    }

    return (
            //clase del mensaje
            <motion.div  className={props.sender ? "mt-2 d-flex justify-content-end" : "mt-2 d-flex justify-content-start"} initial = {{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 200, opacity: 0}}>

                {/* Mensaje de notificación */}
                <div style={messageStyle} className={props.shadow ? "shadow" : props.sender ? "mr-2" : "ml-2"}> 

                    <p className={props.sender === 1 ? "text-white m-0" : "text-dark m-0" } style={{fontWeight: "400"}}>
                        {props.texto}
                    </p>

                </div>

            </motion.div>
    )
}

export default Message



