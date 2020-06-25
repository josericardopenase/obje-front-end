import React from 'react'

function SearchBar() {

    const style = {
        backgroundColor : "#f5f5f5",
        border : "none",
        color: "black"
    }

    return (
        <div className="w-100 mt-5 mb-5">
            <input class="form-control rounded-pill" style={style} type="text" placeholder="Buscar..." aria-label="Search"></input>
        </div>
    )
}

export default SearchBar
