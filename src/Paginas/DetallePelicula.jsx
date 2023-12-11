import React from 'react';

import "./DetallePelicula.css"

export const DetallePelicula = ({ data, error }) => {

  const imagenPorDefecto = 'https:picsum.photos/1280/720';

  return (
    <div className= "DetallePelicula">
      {data ? (
        <div>
          <h1>{`Movie ${data.title}`}</h1>
          <section>
            <img
              src={data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : imagenPorDefecto}
              alt={data.title}
            />
            <p>Sipnosis: {data.overview}</p>
          </section>
        </div>
      ) : (
        <p>{error || 'Loading...'}</p>
      )}
    </div>
  );F
};


