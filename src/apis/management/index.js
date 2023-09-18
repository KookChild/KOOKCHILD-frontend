import axios from "axios"

if (localStorage.getItem('token')) {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`
  }
  

export function loadChildDataAPI() {
    return axios({
      url: '/management/childName',
      method: 'get'
    })
}