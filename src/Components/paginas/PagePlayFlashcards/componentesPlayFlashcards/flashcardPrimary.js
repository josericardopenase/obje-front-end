import React from 'react'
import { motion } from 'framer-motion';

function FlashcardPrimary(props) {

    const rotation = getRandomArbitrary(-4, 4)

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

      console.log(props.obj.id)
    if(props.obj){

        return (


                <div>

                            <div className="text-center" style={{width: "100%"}}>

                                    
                                    <h1>
                                        {
                                            props.obj.titulo
                                        }
                                    </h1>


                        
                            </div>

                            <div style={{marginTop: "18rem", width: "100%"}} className="justify-content-center d-flex">

                                <div className="row">
                                    
                                    {
                                        props.obj.respuestas.map((obj) => <motion.h3 onClick={props.onClick} className="text-white mr-2" style={{padding: "1.5rem 5rem",  borderRadius: "0.7rem", backgroundColor: obj.color}}>{obj.respuesta}</motion.h3>                                    )
                                    }


                                </div>


                            </div>



                </div>

        )
        
    }else{
        return <div></div>
    }
}

export default FlashcardPrimary
