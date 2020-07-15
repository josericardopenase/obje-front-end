import React from 'react'
import { motion } from 'framer-motion'
import BoxFlashcard from '../Components/componentesFlashcards/boxFlashcard'
import ListFlashCards from '../Components/componentesFlashcards/listFlashCards'
import Base from '../Containers/base'


function PageFlashcards() {

    const flashcardDb = [
        {
            id: 1,
            

        },{

        }
    ]

    return (

            <motion.div         initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{duration: 0.6}}
            exit={{opacity: 0}}>


                
                <ListFlashCards></ListFlashCards>


            </motion.div>

    )
}

export default PageFlashcards
