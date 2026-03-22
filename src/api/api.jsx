import axios from 'axios'

const api = axios.create({
  baseURL: 'http://72.61.235.153:5000/api', // Node backend
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
