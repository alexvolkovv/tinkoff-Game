import axios from 'axios'
import { apiURL } from '../utils/api'

export const host = axios.create({
  baseURL: apiURL,
})
