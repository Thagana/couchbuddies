import axios from 'axios';
const API_KEY = '7cd49413';
export const getMovies = (param) => {
  return axios
    .get(`http://www.omdbapi.com/?s=${param}&apikey=${API_KEY}`)
    .then((response) => {
      return response;
    })
    .catch((error) => error);
};
