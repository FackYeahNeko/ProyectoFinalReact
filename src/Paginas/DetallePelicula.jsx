import React from 'react';

import "./DetallePelicula.css"

export const DetallePelicula = ({ data, error }) => {
  return (
    <div>
      {data ? (
        <div>
          <h1>{`Movie ${data.title}`}</h1>
          <section>
            
            <p>Sipnosis: {data.overview}</p>
          </section>
        </div>
      ) : (
        <p>{error || 'Loading...'}</p>
      )}
    </div>
  );
};


