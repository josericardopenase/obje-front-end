import React from 'react'
import ListaAsignaturas from '../Components/componentesAsignaturas/listaAsignaturas'
import SearchBar from '../Components/searchBar'
import Bienvenido from '../Components/bienvenido'

const PageAsignaturas = (props) => {

    const dataBase = [
        "Troncales",
        {
          titulo : "Matemáticas II",
          color1: "#FF8800",
          color1: "#FF8800"
        },
        {
          titulo : "Lengua y literatura",
          color1: "#004cff",
          color1: "#FF8800"
        },
        {
          titulo : "Historia de españa",
          color1: "#15a339",
          color1: "#FF8800"
        },
        {
          titulo : "Inglés",
          color1: "#a31590",
          color1: "#FF8800"
        }
  
      ]


      
    return (
        <div>
            <Bienvenido name="Jose Peña"></Bienvenido>

            <SearchBar></SearchBar>
            
            <ListaAsignaturas obj = {dataBase}></ListaAsignaturas>



            

        </div>
    )
}

export default PageAsignaturas
