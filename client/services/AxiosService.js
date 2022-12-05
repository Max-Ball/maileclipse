import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'localhost:8000',
  timeout: 8000
})