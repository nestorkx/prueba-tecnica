import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://experienciasxcaret.github.io/Developers/api',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
