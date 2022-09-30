import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000,
});


export const postApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/posts',
  timeout: 8000,
});
