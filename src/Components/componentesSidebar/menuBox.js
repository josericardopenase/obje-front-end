import React from 'react'

const MenuBox = (props) => {



    const style = {
        width: "45px", 
        height: "45px", 
        textAlign: "center",
        borderRadius: "1rem",
        textColor: "#414141"
    }

    

    let  imagenes = ""

    if(props.svg != null){
        imagenes = props.svg.map((obj)=>{
            return obj
        })
    }

    let styleColor = {fill : "#a4a4a4"}
    
    if(props.enable){
        styleColor = {
            fill: "#7BC942",
            transform: "scale(1.2)",
        }
    }


    return (
        <div className="w-100 d-flex justify-content-center">
        <div className="mt-4 d-flex justify-content-center rounded-circle iconHover" style={style}>

            
            <svg style={styleColor} className="bi bi-person d-flex flex-column justify-content-center h-100 svgicon" width="1.7em" height="1.7em"  viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
               {imagenes}
            </svg>
            
        </div>
        </div>



    )
}

export default MenuBox
