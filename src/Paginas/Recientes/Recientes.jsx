import './Recientes.css'

// https://developer.themoviedb.org/reference/movie-latest-id

import React, { useEffect, useState } from 'react';
import { ModuloPelicula } from '../ModuloPelicula';
import { DetallePelicula } from '../DetallePelicula'; 


export const Recientes = () => {

  const apiKey = '10a2c4f57489c012e423b0b6af65c580';

  const [moviesData, setMoviesData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState({ data: null, error: null });

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

        setMoviesData(Array.isArray(results) 
        ? results.slice(0, 10) 
        : []);
      })
      .catch(err => console.error(err));
}, []);

const handleMovieClick = async (identificador) => {
  setSelectedMovie(identificador);

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${identificador}?api_key=${apiKey}`);

    if (response.status === 200) {
      const data = await response.json();
      setMovieDetails({ data, error: null });
    } else {
      console.error(response);
      throw new Error('Algo no funcionó');
    }
  } catch (error) {
    setMovieDetails({ data: null, error: error.message });
  }
};

  return (
    <div className="RecientesDesign">
      <h1>Últimas 10 películas añadidas</h1>
       
        <div className = "ModulosPeliculasDesign">
          {moviesData.map(movie => (
            <ModuloPelicula
              key={movie.id}
              title={movie.title}
              backdropPath={movie.backdrop_path}
              onClick={() => handleMovieClick(movie.id)}
            />
          ))}
        </div>

      {selectedMovie && <DetallePelicula data={movieDetails.data} error={movieDetails.error} />}

    </div>
  );
};
