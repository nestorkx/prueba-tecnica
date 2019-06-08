import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://experienciasxcaret.github.io/Developers/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
