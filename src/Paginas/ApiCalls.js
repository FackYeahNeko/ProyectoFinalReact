import axios from 'axios'

const apiKey = "10a2c4f57489c012e423b0b6af65c580";

export const bringMovies = async (criteria) => {

    return await axios.get(`${apiKey}search/movie?query=${criteria}&include_adult=false&language=en-US&page=4&api_key=${apiKey}`)

}