// @flow

const local: boolean = true;
let API_URL: sring = '';
if (local) {
  API_URL = '127.0.0.1:5000';
} else {
  API_URL = ' https://couchbuddies.herokuapp.com/';
}

export default API_URL;
