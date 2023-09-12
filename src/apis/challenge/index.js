import axios from 'axios'
import { BASE_URL } from '../../config'
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true

// export function testAPI() {
//   return axios
//     .get('/test/hello')
//     .then(response => response.data)
//     .catch(error => {
//       throw error
//     })
// }
export function loadAllChallengesAPI(token) {
  return axios
    .get('/challenge?state=all', {
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

export function loadParentChallengesAPI(token) {
  return axios
    .get('/challenge?state=parentConfirmed', {
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

export function loadMyChallengesAPI(token) {
  return axios
    .get('/challenge?state=proceeding', {
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

export function loadChallengeDetailAPI(challenge_id) {
  return axios
    .get(`/challenge/detail/${challenge_id}`, {
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
