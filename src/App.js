import './App.css';
import React, { useState, useEffect } from 'react';
import FilmList from './components/FilmList';
import films from '../src/peliculas.json';
import FilmInfo from './components/FilmInfo';

function App() {

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
    for(let f of films){
      if(f.nombre === fl){
        console.log(f.categoria)
        setCatInfo(f.categoria)
        setSinopsis(f.sinopsis)
      }
    }
  }


  const filmsFilter = categoria_sel ? films.filter(film => film.categoria === categoria_sel) : films

  useEffect(() => {
    // Extraer categorías únicas
    const categoriasUnicas = Array.from(new Set(films.map(film => film.categoria)));
    setCategorias(categoriasUnicas);
  }, []);

  return (
    <div className="App">
      <h3>Films:</h3>
      <FilmList data={filmsFilter} categorias={categorias} selectCategory={categorySelected} selectFilm={filmSelected}/>
      <FilmInfo data={films} film={film_sel} category={cat_info} sinopsis={sinopsis}/>
    </div>
  );
}

export default App;
