import axios from 'axios'
import { BASE_URL } from '../../config'
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true
if (localStorage.getItem('token')) {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`
}
// export function testAPI() {
//   return axios
//     .get('/test/hello')
//     .then(response => response.data)
//     .catch(error => {
//       throw error
//     })
// }
export function loadAllChallengesAPI() {
  return axios
    .get('/challenge?state=all')
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadParentChallengesAPI() {
  return axios
    .get('/challenge?state=parentConfirmed')
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadMyChallengesAPI() {
  return axios
    .get('/challenge?state=proceeding')
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadChallengeDetailAPI(challenge_id) {
  return axios
    .get(`/challenge/detail/${challenge_id}`)
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
export function childConfirmAPI(challenge_id) {
  return axios
    .post(`/challenge/detail/${challenge_id}/childConfirm`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlsZDQyMUBnbWFpbC5jb20iLCJpYXQiOjE2OTQ0NzkxMjgsImV4cCI6MTY5NzA3MTEyOH0.BlEalZy8Rvo51YQCh3AkWEQmTNYv9iL3NN5rTL27VWA',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
export function checkChallengeIsProceedingAPI(challenge_id) {
  return axios
    .get(`/challenge/check/${challenge_id}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlsZDQyMUBnbWFpbC5jb20iLCJpYXQiOjE2OTQ0NzkxMjgsImV4cCI6MTY5NzA3MTEyOH0.BlEalZy8Rvo51YQCh3AkWEQmTNYv9iL3NN5rTL27VWA',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
