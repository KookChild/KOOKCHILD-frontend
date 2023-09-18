import axios from 'axios'
import { BASE_URL } from '../../config'
axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true
if (localStorage.getItem('token')) {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`
}

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

export function loadChallengeDetailAPI(challengeId) {
  return axios
    .get(`/challenge/detail/${challengeId}`)
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
export function childConfirmAPI(challengeId) {
  return axios
    .post(`/challenge/detail/${challengeId}/childConfirm`)
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function parentConfirmAPI(challengeId, childId, parentReward) {
  return axios.post(`/challenge/detail/${challengeId}/parentConfirm`, {
    childId: childId,
    parentReward: parentReward,
  })
}
export function checkChallengeIsProceedingAPI(childId, challengeId) {
  let url = `/challenge/check/${challengeId}`

  if (childId !== null && childId !== undefined) {
    url += `/${childId}`
  }

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
