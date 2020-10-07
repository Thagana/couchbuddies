// @flow
// Colors
export const BASE_COLOR = '#037bfc';
export const PRIMARY_COLOR = '#7d43d9';

export const POSTER_BASE = 'http://image.tmdb.org/t/p';
export const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';
export const API_ENDPOINT = 'https://api.themoviedb.org/3/';

export const searchMovie = (keyword) => {
  return fetch(
    `${API_ENDPOINT}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`,
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export const loadPopular = () => {
  return fetch(`${API_ENDPOINT}movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
