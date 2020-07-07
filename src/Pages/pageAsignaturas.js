import React from 'react'
import ListaAsignaturas from '../Components/componentesAsignaturas/listaAsignaturas'
import SearchBar from '../Components/componentesAsignaturas/searchBar'
import Bienvenido from '../Components/componentesAsignaturas/bienvenido'
import { AnimatePresence, motion } from "framer-motion"

const PageAsignaturas = (props) => {

    const dataBase = [
        "Troncales",
        {
          titulo : "Matemáticas II",
          color1: "#FF8800",
          color2: "#57330a"
        },
        {
          titulo : "Lengua y literatura",
          color1: "#336BFF",
          color2: "#121f42"
        },
        {
          titulo : "Historia de españa",
          color1: "#15a339",
          color2: "#041f0b"
        },
        {
          titulo : "Inglés",
          color1: "#8605B9",
          color2: "#23082e"
        }
  
      ]

      const dataBase2 = [
        "Opcionales 1",
        {
          titulo : "Matemáticas II",
          color1: "#FF8800",
          color2: "#57330a"
        },
        {
          titulo : "Lengua y literatura",
          color1: "#336BFF",
          color2: "#121f42"
        },
        {
          titulo : "Historia de españa",
          color1: "#15a339",
          color2: "#041f0b"
        },
        {
          titulo : "Inglés",
          color1: "#8605B9",
          color2: "#23082e"
        },
        {
          titulo : "Inglés",
          color1: "#8605B9",
          color2: "#23082e"
        }
  
      ]


      const dataBase3 = [
        "Opcionales 2",
        {
          titulo : "Matemáticas II",
          color1: "#FF8800",
          color2: "#57330a"
        },
        {
          titulo : "Lengua y literatura",
          color1: "#336BFF",
          color2: "#121f42"
        },
        {
          titulo : "Historia de españa",
          color1: "#15a339",
          color2: "#041f0b"
        },
        {
          titulo : "Inglés",
          color1: "#8605B9",
          color2: "#23082e"
        },
        {
          titulo : "Inglés",
          color1: "#8605B9",
          color2: "#23082e"
        }
  
      ]




      
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{duration: 0.6}}
        exit={{opacity: 0}}

        >
            <Bienvenido name="Jose Peña"></Bienvenido>

            <SearchBar></SearchBar>
            
            <ListaAsignaturas obj = {dataBase}></ListaAsignaturas>

            <ListaAsignaturas obj = {dataBase2}></ListaAsignaturas>

            <ListaAsignaturas obj = {dataBase3}></ListaAsignaturas>


            



            

        </motion.div>
    )
}

export default PageAsignaturas
