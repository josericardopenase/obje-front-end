import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Message from './message'


function OwlChat(props) {

    const [chat, setChat] = useState([ {texto: "Good morgning human! Are you ready to study one hour", sender: 0}])

    function addChatMessage(_sender, _msg){
        if(_msg != ""){
            //CUANDO LO ENVIA UN HUMANO
            if(_sender === 1){
                setChat(chat.concat({texto: _msg, sender: _sender}))
                //Buscar en la api la respuesta del robot y hacerla
            }else{
                setChat(chat.concat({texto: _msg, sender: _sender}))
            }
        }
    }

    function keyPress(e){
        if(e.keyCode == 13){
           addChatMessage(1, e.target.value);
           e.target.value= ""
           // put the login here
        }
     }
     

    

        return (
            
                
                <AnimatePresence>

                {props.active === 1 ? (
                <motion.div key="chat" style={chatStyle} className="shadow d-flex flex-column"
                initial = {{y: 400, opacity: 0}}
                animate = {{y: 0, opacity: 1}}
                exit = {{y: 600, opacity: 1}}
                transition = {{duration: 0.3}}>


                    {/* TITULO DEL CHAT */}
                    <div className="w-100 p-2 text-white" style={{backgroundColor: "rgb(123, 201, 66)",     borderRadius: "1rem 0rem 0rem 0rem", zIndex: "100"}}>
                        <div className="justify-content-between d-flex">
                            <div className="d-flex row">
                                <svg id="Capa_1" className="ml-3 mr-2" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m286 512c-16.569 0-30-13.431-30-30l-30-42.684 30-33.316h60v76c0 16.569-13.431 30-30 30z" fill="#873f2e"/><path d="m226 512c-16.569 0-30-13.431-30-30v-76h60v76c0 16.569-13.431 30-30 30z" fill="#a34f3e"/></g><path d="m497 391h-211v30h211c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#36414d"/><path d="m15 391c-8.291 0-15 6.709-15 15s6.709 15 15 15h181v-30z" fill="#4d6666"/><path d="m436 0c-23.699 0-45.901 11.4-60 30h-45-45c-14.099-18.6-36.301-30-60-30-8.401 0-15 6.599-15 15v91h60c24.6 0 46.199 12.001 60 30.601 13.801-18.6 35.4-30.601 60-30.601h60v-91c0-8.401-6.599-15-15-15z" fill="#c86e59"/><path d="m391 106h60v-91c0-8.401-6.599-15-15-15-23.699 0-45.901 11.4-60 30h-45v106.601c13.801-18.6 35.4-30.601 60-30.601z" fill="#a34f3e"/><path d="m391 106c-24.6 0-46.199 12.001-60 30.601-13.801-18.6-35.4-30.601-60-30.601h-60v292.895l-15 22.105h90c15.612 0 30.67-2.329 45-6.411 69.109-19.68 120-83.3 120-158.589v-150z" fill="#ffe1ba"/><path d="m451 256v-150h-60c-24.6 0-46.199 12.001-60 30.601v277.989c69.109-19.681 120-83.301 120-158.59z" fill="#ffbfab"/><g><path d="m263.954 211.41c-19.775-1.934-39.082 3.56-54.507 15.791-36.679 29.063-74.15 43.799-111.386 43.799h-22.061c-8.291 0-15 6.709-15 15 0 15.855 3.25 30.855 8.293 45l51.707 15-37.147 15c24.249 36.141 65.446 60 112.147 60 69.199 0 126.914-51.826 134.224-120.542 4.616-43.096-24.179-84.686-66.27-89.048z" fill="#c86e59"/></g><path d="m181 346c0-8.291-6.709-15-15-15h-96.707c3.781 10.604 8.388 20.799 14.561 30h82.146c8.291 0 15-6.709 15-15z" fill="#a34f3e"/><path d="m466 91h-75c-24.62 0-46.318 12.085-60 30.463-13.682-18.378-35.38-30.463-60-30.463h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h75c24.814 0 45 20.186 45 45 0 8.291 6.709 15 15 15s15-6.709 15-15c0-24.814 20.186-45 45-45h75c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#a34f3e"/><path d="m346 166c0-24.814 20.186-45 45-45h75c8.291 0 15-6.709 15-15s-6.709-15-15-15h-75c-24.62 0-46.318 12.085-60 30.463v59.537c8.291 0 15-6.709 15-15z" fill="#873f2e"/></g></svg>
                                <h4 className="mt-1 mb-0 " style={{ fontSize: "22px"}}>Owl chat</h4>
                            </div>


                            <svg onClick={props.onClick}  style={{zIndex: "4000"}} viewBox="0 0 329.26933 329" className="mr-2" width="15px" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                            

                        </div>
                        


                        
                    </div>
                    
                    {/* TEXT BODY */}
                    <div id="text-body-cool" className="flex-column pb-2" style={{ overflow: "auto", overscrollBehavior: "contain", height: "20rem"}}>
                        {
                            chat.map((obj) =>     <Message texto ={obj.texto} sender={obj.sender} shadow={false}></Message>                    )
                        }
                    </div>

                    {/* ESCRITURA EN EL CHAT*/}
                    <div style={writeStyle}>
                            <input className="w-100 pr-3 pl-3 pt-3 pb-3 " onKeyDown={keyPress} style={inputStyle} placeholder="Escribe aqui tu texto..."></input>
                    </div>


                </motion.div>
                ) : (
                    <div></div>
                )
}

                </AnimatePresence>



        )

}


const chatStyle = {
    position: "fixed",
    zIndex: "3001",
    overflowX: "hidden",
    bottom: 0,
    right: 0,
    width: "18rem",
    backgroundColor: "white",
    height: "26rem", 
    borderRadius: "1rem 0rem 0rem 0rem",
    fontWeight: "800",
    backgroundColor: "#c2fc9a"

}
const writeStyle =  {
    width: "100%",
    backgroundColor: "#f5f5f5",
}

const inputStyle = {
    border: "none",
    backgroundColor: "white",
    color: "grey",
    outline: "none"
}

export default OwlChat
