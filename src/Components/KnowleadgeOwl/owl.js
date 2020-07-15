import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Message from './message'
import OwlNotifications from './owlNotifications';
import OwlChat from './owlChat';



const Owl = () => {

    const [chatActive, setChatActive] = useState(0)
    

    
    return (
        <AnimatePresence>
        <div>

            <div style={owlStyle}>

                <div  className="d-flex justify-content-end" style={{verticalAlign: "baseline"}} >

                    <div style={{transition: "all 0.5s ease"}}>
                        {/* Icono del buho abajo a la derecha */}
                        <motion.div
                        onClick = {() => {setChatActive(1); console.log(chatActive)}}
                        className="shadow" 
                            style={squareStyle}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                                scale: 0.8
                            }}  >
                                
                                <svg id="Capa_1" style= {{position: "absolute", top: "15%", left:"13%"}} enable-background="new 0 0 512 512" height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m286 512c-16.569 0-30-13.431-30-30l-30-42.684 30-33.316h60v76c0 16.569-13.431 30-30 30z" fill="#873f2e"/><path d="m226 512c-16.569 0-30-13.431-30-30v-76h60v76c0 16.569-13.431 30-30 30z" fill="#a34f3e"/></g><path d="m497 391h-211v30h211c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#36414d"/><path d="m15 391c-8.291 0-15 6.709-15 15s6.709 15 15 15h181v-30z" fill="#4d6666"/><path d="m436 0c-23.699 0-45.901 11.4-60 30h-45-45c-14.099-18.6-36.301-30-60-30-8.401 0-15 6.599-15 15v91h60c24.6 0 46.199 12.001 60 30.601 13.801-18.6 35.4-30.601 60-30.601h60v-91c0-8.401-6.599-15-15-15z" fill="#c86e59"/><path d="m391 106h60v-91c0-8.401-6.599-15-15-15-23.699 0-45.901 11.4-60 30h-45v106.601c13.801-18.6 35.4-30.601 60-30.601z" fill="#a34f3e"/><path d="m391 106c-24.6 0-46.199 12.001-60 30.601-13.801-18.6-35.4-30.601-60-30.601h-60v292.895l-15 22.105h90c15.612 0 30.67-2.329 45-6.411 69.109-19.68 120-83.3 120-158.589v-150z" fill="#ffe1ba"/><path d="m451 256v-150h-60c-24.6 0-46.199 12.001-60 30.601v277.989c69.109-19.681 120-83.301 120-158.59z" fill="#ffbfab"/><g><path d="m263.954 211.41c-19.775-1.934-39.082 3.56-54.507 15.791-36.679 29.063-74.15 43.799-111.386 43.799h-22.061c-8.291 0-15 6.709-15 15 0 15.855 3.25 30.855 8.293 45l51.707 15-37.147 15c24.249 36.141 65.446 60 112.147 60 69.199 0 126.914-51.826 134.224-120.542 4.616-43.096-24.179-84.686-66.27-89.048z" fill="#c86e59"/></g><path d="m181 346c0-8.291-6.709-15-15-15h-96.707c3.781 10.604 8.388 20.799 14.561 30h82.146c8.291 0 15-6.709 15-15z" fill="#a34f3e"/><path d="m466 91h-75c-24.62 0-46.318 12.085-60 30.463-13.682-18.378-35.38-30.463-60-30.463h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h75c24.814 0 45 20.186 45 45 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45h75c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#a34f3e"/><path d="m346 166c0-24.814 20.186-45 45-45h75c8.291 0 15-6.709 15-15s-6.709-15-15-15h-75c-24.62 0-46.318 12.085-60 30.463v59.537c8.291 0 15-6.709 15-15z" fill="#873f2e"/></g></svg>


                        </motion.div>
                        


                    </div>

                
                </div>

                <OwlNotifications/>
                



            </div>

            <OwlChat active = {chatActive} onClick={() => setChatActive(0)}  />
            


        </div>
        </AnimatePresence>
    )


}



export default Owl

const squareStyle = {
    
    width: "65px", 
    position: "relative",
    height: "65px",
    backgroundColor: "rgb(123, 201, 66)",
    borderRadius: "2rem 2rem 0.25rem 2rem",
}

const owlStyle = {
    zIndex: "100",
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "1rem"
}

