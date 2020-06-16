// @flow
import axios from 'axios';
import API_URL from '../configs/app';

export const loginUser = (user) => {
  return axios
    .post(`${API_URL}/login`, {
      username: user.username,
      passowrd: user.password,
    })
    .then((response) => response)
    .catch((error) => error);
};
