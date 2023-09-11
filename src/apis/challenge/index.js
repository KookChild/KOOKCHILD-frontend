import axios from 'axios'
export function testAPI() {
  return axios
    .get('/test/hello')
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
export function loadAllChallengesAPI() {
  return axios
    .get('/challenge?state=all', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDM5Nzc1NiwiZXhwIjoxNjk2OTg5NzU2fQ.2x3wWDzl2YLCNVDAvglW0bP0AbtZMo1PF2eRQ6GqeMo',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadParentChallengesAPI() {
  return axios
    .get('/challenge?state=parentConfirmed', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDM5Nzc1NiwiZXhwIjoxNjk2OTg5NzU2fQ.2x3wWDzl2YLCNVDAvglW0bP0AbtZMo1PF2eRQ6GqeMo',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

export function loadMyChallengesAPI() {
  return axios
    .get('/challenge?state=proceeding', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDM5Nzc1NiwiZXhwIjoxNjk2OTg5NzU2fQ.2x3wWDzl2YLCNVDAvglW0bP0AbtZMo1PF2eRQ6GqeMo',
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
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDM5Nzc1NiwiZXhwIjoxNjk2OTg5NzU2fQ.2x3wWDzl2YLCNVDAvglW0bP0AbtZMo1PF2eRQ6GqeMo',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
