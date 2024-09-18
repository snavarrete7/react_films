import React from 'react'

const FilmList = (props) => {

    const [categoria, setCategoria] = React.useState('')
    const [pelicula, setPelicula] = React.useState('')

    return (
        <div>
            <select name="categories" id="cat" onChange={(c) => setCategoria(c.target.value)}>
                <option value="">All categories</option>
                {
                    props.categorias.map((cat) => (
                        <option value={cat}>
                            {cat}
                        </option>
                    ))
                }
            </select>
            <button onClick={() => props.selectCategory(categoria)}>Load</button>
            <ul>
                {
                    props.data.map((film) => (
                        <li key={film.id}>
                            {film.nombre}
                            <button onClick={() => props.selectFilm(film.nombre)}>More</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilmList
