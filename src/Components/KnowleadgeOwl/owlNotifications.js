import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Message from './message'




function OwlNotifications() {

    const [listMessages, setListMessages] = useState([]);
    const [counter, setCounter] = useState(0)



    //importante porque dentro del timeout pasan cosas nacis
    const listMessagesRef = useRef(listMessages)
    listMessagesRef.current = listMessages


    //añade un mensaje en el buhito
    function postNotification(msg){

        setListMessages(listMessages.concat(msg))
        
        setTimeout(function() {
            setListMessages(listMessagesRef.current.filter(p => p !== msg))

        }, 4000)
    }



    return (



            listMessages.map((msg) => <Message sender = {1} color="rgb(123, 201, 66)" texto={msg}/>)


    )
}

export default OwlNotifications
