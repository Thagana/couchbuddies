import {action} from 'easy-peasy';

export default {
  movieList: [],
  isLoggedIn: false,
  addMovies: action((state, payload) => {
    state.movieList.push(payload);
  }),
};
