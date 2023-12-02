import React from 'react';

import "./ModuloPelicula.css"

export const ModuloPelicula = ({ title, backdropPath }) => {

  const imagenPorDefecto = 'https:picsum.photos/200/300';

  return (
    <div className="ModuloPelicula">
        <h2>{title}</h2>
        <img
            src={backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : imagenPorDefecto}
            alt={title}
            className="ImagenPelicula"
        />   
    </div>
);
};

