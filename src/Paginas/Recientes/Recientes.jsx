import './Recientes.css'

// https://developer.themoviedb.org/reference/movie-latest-id

import React, { useEffect, useState } from 'react';
import { ModuloPelicula } from '../ModuloPelicula';


export const Recientes = () => {

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const apiKey = '10a2c4f57489c012e423b0b6af65c580';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=release_date.desc`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        const results = data.results || data;

        setMoviesData(Array.isArray(results) ? results.slice(0, 10) : []);
      })
      .catch(err => console.error(err));
}, []);

  return (
    <div className="RecientesDesign">
      <h1>Últimas 10 películas añadidas</h1>
       <div className = "ModulosPeliculasDesign">
      {moviesData.map(movie => (
        <ModuloPelicula
          key={movie.id}
          title={movie.title}
          backdropPath={movie.backdrop_path}
        />
      ))}
      </div>
    </div>
  );
};
