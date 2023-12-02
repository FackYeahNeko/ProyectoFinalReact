import './MejorValoradas.css'

import React, { useEffect, useState } from 'react';
import { ModuloPelicula } from '../ModuloPelicula';


export const MejorValoradas = () => {

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const apiKey = '10a2c4f57489c012e423b0b6af65c580';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_average.desc`;

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
      <h1>Las 10 Películas mejor Valoradas</h1>

      {moviesData.map(movie => (
        <ModuloPelicula
          key={movie.id}
          title={movie.title}
          backdropPath={movie.backdrop_path}
        />
      ))}
    </div>
  );
};