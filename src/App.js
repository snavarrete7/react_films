import './App.css';
import React, { useState, useEffect } from 'react';
import FilmList from './components/FilmList';
import films from '../src/peliculas.json';
import FilmInfo from './components/FilmInfo';

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoria_sel, setSelCat] =useState([]);
  const [film_sel, setSelFilm] = useState("");
  const [cat_info, setCatInfo] = useState("");
  const [sinopsis, setSinopsis] = useState("");

  const categorySelected = (cat) =>{
    setSelCat(cat)
  }

  const filmSelected = (fl) => {
    setSelFilm(fl)
    for(let f of peliculas){
      if(f.nombre === fl){
        console.log(f.categoria)
        setCatInfo(f.categoria)
        setSinopsis(f.sinopsis)
      }
    }
  }

  useEffect(() => {

    // Hacer la llamada a la API de json-server cuando se carga el componente
    fetch('http://localhost:3030/peliculas')  // Asegúrate de que el puerto es el correcto
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPeliculas(data);  // Almacenar las películas en el estado

        // Extraer categorías únicas
        const categoriasUnicas = Array.from(new Set(data.map(film => film.categoria)));
        console.log(categoriasUnicas)
        setCategorias(categoriasUnicas);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);


  const filmsFilter = categoria_sel ? peliculas.filter(film => film.categoria === categoria_sel) : peliculas

  return (
    <div className="App">
      <h3>Films:</h3>
      <FilmList data={filmsFilter} categorias={categorias} selectCategory={categorySelected} selectFilm={filmSelected}/>
      <FilmInfo data={peliculas} film={film_sel} category={cat_info} sinopsis={sinopsis}/>
    </div>
  );
}

export default App;
