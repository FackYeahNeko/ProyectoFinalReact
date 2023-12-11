import './Busqueda.css';
import { useState } from 'react';

import { DetallePelicula } from '../DetallePelicula';

export const Busqueda = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState({ data: null, error: null });

  const API_KEY = '10a2c4f57489c012e423b0b6af65c580';

  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleBuscarClick = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(busqueda)}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResultados(data.results);
      })
      .catch((error) => {
        console.error('Error al realizar la búsqueda en TMDB:', error);
      });
  };

  const handleMovieClick = async (identificador) => {
    setSelectedMovie(identificador);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${identificador}?api_key=${API_KEY}`);

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
    <div className="BusquedaDesign">
      <h1>Introduce aqui tu busqueda</h1>
      <input type="text" onChange={handleInputChange} value={busqueda} />
      <button onClick={handleBuscarClick}>Buscar</button>

      <div className="ResultadosBusqueda">
        <ul>
          {resultados.map((resultado) => (
            <li key={resultado.id} onClick={() => handleMovieClick(resultado.id)}>
              {resultado.title}
            </li>
          ))}
        </ul>
        <div className="DetalleBusqueda">
          {selectedMovie && <DetallePelicula data={movieDetails.data} error={movieDetails.error} />}
        </div>
      </div>
    </div>
  );
};
