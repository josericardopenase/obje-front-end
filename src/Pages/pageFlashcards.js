import React from 'react'
import { motion } from 'framer-motion'
import BoxFlashcard from '../Components/componentesFlashcards/boxFlashcard'
import ListFlashCards from '../Components/componentesFlashcards/listFlashCards'


function PageFlashcards() {
    return (
        <motion.div         initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{duration: 0.6}}
        exit={{opacity: 0}}>

            <div className="d-flex position-fixed" style={{top: "4%", left: "6%"}}>
            <svg id="Capa_1" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m454.22 313.78c0 109.47-88.75 198.22-198.22 198.22s-198.22-88.75-198.22-198.22c0-37.65 10.49-72.86 28.74-102.83 0 0 25.24 53.86 68.6 36.45 17.05-6.84 36.46-26.05 18.16-57.74-19.74-34.17-9.27-82.43 34.24-100.9 48.48-20.58 48.48-88.76 48.48-88.76 4.88 3.13 76.59 50.67 50.28 111.89-15.72 36.58-17.6 80.91 15.09 90.71 39.12 11.74 59.77-42.54 59.77-42.54 44.59 36.34 73.08 91.7 73.08 153.72z" fill="#fcd703"/><path d="m454.22 313.78c0 109.47-88.75 198.22-198.22 198.22v-512c4.88 3.13 76.59 50.67 50.28 111.89-15.72 36.58-17.6 80.91 15.09 90.71 39.12 11.74 59.77-42.54 59.77-42.54 44.59 36.34 73.08 91.7 73.08 153.72z" fill="#fe9100"/><path d="m351.2 416.82c0 59.92-50.51 95.18-95.2 95.18-52.56 0-95.17-42.61-95.19-95.16 0-.02 0-.02 0-.04-.24-19.81 4.04-43.24 15.97-70.43l38.91 11.38c0-39.56 21.06-66.17 40.31-82.23 16.18-13.48 31.1-19.52 31.1-19.52 4.88 58.84 39.4 93.06 51.47 114.71 10.45 18.76 12.63 30.39 12.63 46.11z" fill="#ff7b49"/><path d="m351.2 416.82c0 59.92-50.51 95.18-95.2 95.18v-236.48c16.18-13.48 31.1-19.52 31.1-19.52 4.88 58.84 39.4 93.06 51.47 114.71 10.45 18.76 12.63 30.39 12.63 46.11z" fill="#fd435b"/></g></svg>
            <h1 className="ml-3" style={{fontWeight: "700"}}>Ponte a prueba</h1>
            </div>


            
            <ListFlashCards></ListFlashCards>


        </motion.div>
    )
}

export default PageFlashcards
