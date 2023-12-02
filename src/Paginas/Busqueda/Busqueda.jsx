import './Busqueda.css'
import {useState} from "react";

export const Busqueda = () => {
    const [Busqueda, setBusqueda] = useState("")
    const [resultados, setResultados] = useState([]);

    const handleInputChange = (event) => {
        setBusqueda(event.target.value);
    }

    const handleBuscarClick = () => { //Función que buscará en el api lo que el usuario escribió
        const apiKey = '10a2c4f57489c012e423b0b6af65c580'; 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(Busqueda)}`; //El encode se asegura transforma los simbolos raros a formato URL que no de fallos
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setResultados(data.results);
        })
        .catch(error => {
            console.error("Error al realizar la búsqueda en TMDB:", error);
        });
    }

    return (
        <div className="BusquedaDesign">
            <h1>Soy una busqueda</h1>
                <input
                type="text"
                onChange={handleInputChange}
                value={Busqueda}
                />
                <button onClick={handleBuscarClick}>Buscar</button>
            <div className="ResultadosBusquedaDesign">
                Aqui van los resultados de la busqueda
            </div>
            <ul>
                    {resultados.map(resultado => (
                        <li key={resultado.id}>{resultado.title}</li>
                    ))}
            </ul>
        </div>
    )
} 