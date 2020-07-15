import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function TooltipCustom(props) {

    const [enabled, setEnabled] = useState(false)
        
    const tooltipStyles = {
        position: "absolute",
        backgroundColor: "rgb(255, 136, 0)",
        borderRadius: "0rem 0.8rem  0.8rem 0.8rem",
        color: "white",
        display: !enabled ? "none" : "block" 

    }

    const tooltipTextStyles={
        borderRadius: "0.5rem 0.5rem 0rem 0rem",
        backgroundColor: !enabled ? "white" : "#f7cd9c",
        width: "auto",
        transition: "all 0.2s ease"
    }
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="position-relative" >

                <span onMouseEnter={()=>setEnabled(true)} onMouseLeave={()=>setEnabled(false)} style={tooltipTextStyles}>
                    {props.children}
                </span>

                {enabled ? 
                
                (
                    <motion.div style={tooltipStyles} className="p-3 mt-1" initial={{opacity: 0, y: 20, scale: 0.25}} animate={{opacity: 1, y: 0, scale:1}} exit={{opacity: 0, y: 20}}>

                    <p className="mb-0" style={{fontSize: "16px"}} >A right angle is an <strong>angle</strong> of size 90°.</p>

                </motion.div>
                ) : (
                    <div/>
                )}

            </div>
        </AnimatePresence>
    )
}

export default TooltipCustom
