import axios from 'axios';
const API_KEY = '7cd49413';

export const getMovies = async (param) => {
  try {
    const response = await axios
      .get(`http://www.omdbapi.com/?s=${param}&apikey=${API_KEY}`);
    return response;
  } catch (error) {
    return error;
  }
};
