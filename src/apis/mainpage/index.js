import axios from 'axios'
import { BASE_URL } from '../../config'
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true
if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}

export function loadParentNameAPI(token) {
  return axios
    .get('/user', //{
      // headers: {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQ0QGdtYWlsLmNvbSIsImlhdCI6MTY5NDQ3OTU3NSwiZXhwIjoxNjk3MDcxNTc1fQ.qPflEr9r3G8U0KZDlPdwP1Lo-t1-gth0WEBYWpuuUqY',
      // },
    // }
    )
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadChildAccountDetailAPI(token) {
  return axios
    .get('/management/info', //{
      // headers: {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlsZDQyMUBnbWFpbC5jb20iLCJpYXQiOjE2OTQ0NzkxMjgsImV4cCI6MTY5NzA3MTEyOH0.BlEalZy8Rvo51YQCh3AkWEQmTNYv9iL3NN5rTL27VWA',
      // },
    // }
    )
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadAllMissionAPI(token) {
  return axios
    .get('/mission', //{
      // headers: {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlsZDQyMUBnbWFpbC5jb20iLCJpYXQiOjE2OTQ0NzkxMjgsImV4cCI6MTY5NzA3MTEyOH0.BlEalZy8Rvo51YQCh3AkWEQmTNYv9iL3NN5rTL27VWA',
      // },
    // }
    )
    .then(response => response.data.missionLists)
    .catch(error => {
      throw error
    })
}
