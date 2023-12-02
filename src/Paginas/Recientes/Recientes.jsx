import './Recientes.css'

// https://developer.themoviedb.org/reference/movie-latest-id

import React, { useEffect, useState } from 'react';
import { ModuloPelicula } from '../ModuloPelicula';


export const Recientes = () => {

  const [movieData, setMovieData] = useState(null);

  
  useEffect(() => {
    //Solicitud de api
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGEyYzRmNTc0ODljMDEyZTQyM2IwYjZhZjY1YzU4MCIsInN1YiI6IjY1NmIzNTdhNjUxN2Q2MDEwZTU4Yjc4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPCc0zAaP2oURwRuKv95gF2mlP3zV69KzdaLjwGgUnY',
      },
    };

    //Solicitud de la api de últimas añadidas
    fetch('https://api.themoviedb.org/3/movie/latest', options)
      .then(response => response.json())
      .then(data => setMovieData(data))
      .catch(err => console.error(err));
  }, []); // El [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <div className="RecientesDesign">
      <h1>Soy un Recientes</h1>

      {movieData && (
      <ModuloPelicula 
      title={movieData.title} 
      backdropPath={movieData.backdrop_path || ''} />
      )}
    </div>
  );
};
