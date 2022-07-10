import { apiURL } from '../utils/api'
import { HttpWorker } from '../utils/HttpWorker'

export const host = new HttpWorker(apiURL)
