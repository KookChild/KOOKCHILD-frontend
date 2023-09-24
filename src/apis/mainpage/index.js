import axios from 'axios'
import { BASE_URL } from '../../config'
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true
if (localStorage.getItem('token')) {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`
}

export function loadParentNameAPI(token) {
  return axios
    .get(
      '/user',
    )
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadChildAccountDetailAPI(token) {
  return axios
    .get(
      '/management/info',
    )
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadAllMissionAPI(token) {
  return axios
    .get(
      '/mission',
    )
    .then(response => response.data.missionLists)
    .catch(error => {
      throw error
    })
}
