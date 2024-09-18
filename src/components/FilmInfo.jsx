import React from 'react'

const FilmInfo = (props) => {

    if(props.film === "" || props.film === null){
        return null;
    }

    return (
        <div>
            <h3>Film information:</h3>
            <h3>Name: {props.film}</h3>
            <h3>Category: {props.category}</h3>
        </div>
    )
}

export default FilmInfo
