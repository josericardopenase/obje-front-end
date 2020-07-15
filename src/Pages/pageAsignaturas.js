import React from 'react'
import ListaAsignaturas from '../Components/componentesAsignaturas/listaAsignaturas'
import SearchBar from '../Components/componentesAsignaturas/searchBar'
import Bienvenido from '../Components/componentesAsignaturas/bienvenido'
import { AnimatePresence, motion } from "framer-motion"
import Base from '../Containers/base'

const PageAsignaturas = (props) => {

    const dataBase = [
        "Troncales",
        {
          titulo : "Matemáticas II",
          color1: "#fe585b",
          color2: "#f97c7e",
          imagen: "infinito.png"
        },
        {
          titulo : "Inglés",
          color1: "#b069fe",
          color2: "#bd79ff",
          imagen: "inglaterra.png"
        },
        {
          titulo : "Lengua y literatura",
          color1: "#508df9",
          color2: "#6b99ff",
          imagen: "libro.png"
        },
        {
          titulo : "Historia de españa",
          color1: "#0cd25d",
          color2: "#30dc80",
          imagen: "historia.png"
        },

  
      ]





      
    return (
      <Base>
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{duration: 0.6}}
        exit={{opacity: 0}}

        >
            <Bienvenido name="Jose Peña"></Bienvenido>

            <SearchBar></SearchBar>
            
            <ListaAsignaturas obj = {dataBase}></ListaAsignaturas>



            



            

        </motion.div>
        </Base>
    )
}

export default PageAsignaturas
