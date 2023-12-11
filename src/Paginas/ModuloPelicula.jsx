import React from 'react';

import "./ModuloPelicula.css"

export const ModuloPelicula = ({ title, backdropPath, onClick }) => {

    const imagenPorDefecto = 'https:picsum.photos/1280/720';

    return (
        <div className="ModuloPelicula" onClick={onClick}>
            <h2>{title}</h2>
            <img
                src={backdropPath ? `https://image.tmdb.org/t/p/original${backdropPath}` : imagenPorDefecto}
                alt={title}
            />
        </div>
    );
};

