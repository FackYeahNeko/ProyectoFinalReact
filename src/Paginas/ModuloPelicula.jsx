import React from 'react';

export const ModuloPelicula = ({ title, backdropPath }) => {
  

  return (
    <div className="ModuloPelicula">
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/original${backdropPath}`} alt={`${title} backdrop`} />
    </div>
  );
};

